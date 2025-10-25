export type WakeUpdateInfo = {
  attempt: number;          // 1-based attempt counter
  ok?: boolean;             // present only when done
  done: boolean;            // true when success/fail finalizes
  status?: number;          // last HTTP status seen (if any)
  pathTried?: string;       // last path tried (if any)
  error?: string;           // last error message (if any)
};

// Accepts string or string[] per base
export type WakeEndpoints = Record<string, string | string[]>;

export type WakeOpts = {
  bases?: string[];
  path?: string;                         // default /api/health
  method?: "GET" | "HEAD";               // default GET
  retries?: number;                      // default 3
  timeoutMs?: number;                    // default 6000
  backoffMs?: number;                    // default 1200
  endpoints?: WakeEndpoints;             // base -> path OR [paths]
  onUpdate?: (base: string, info: WakeUpdateInfo) => void;
  okIf?: (status: number) => boolean;    // default: s < 500 counts as awake
};

const ENV_BASES = [
  import.meta.env.VITE_AUTH_API_URL,
  import.meta.env.VITE_CARS_API_BASE_URL,
  import.meta.env.VITE_COMMENTS_API_BASE_URL,
  import.meta.env.VITE_CONTENT_API_BASE_URL,
].filter(Boolean) as string[];

const DEBUG_WAKE =
  String(import.meta.env.VITE_DEBUG_WAKE ?? "").toLowerCase() === "true";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function jitter(ms: number, pct = 0.35): number {
  const delta = ms * pct;
  return ms + (Math.random() * 2 - 1) * delta;
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit & { timeoutMs?: number } = {}
): Promise<Response> {
  const { timeoutMs = 6000, ...rest } = init;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, {
      cache: "no-store",
      keepalive: true,
      signal: ctrl.signal,
      ...rest,
    });
  } finally {
    clearTimeout(t);
  }
}

async function tryPathsOnce(
  base: string,
  paths: string[],
  method: "GET" | "HEAD",
  timeoutMs: number,
  okIf: (s: number) => boolean,
  onUpdate?: WakeOpts["onUpdate"]
): Promise<{ ok: boolean; status?: number; path?: string }> {
  const root = base.replace(/\/+$/, "");
  for (const p of paths) {
    const probe = `${root}${p.startsWith("/") ? "" : "/"}${p}`;
    if (DEBUG_WAKE) console.time(`wake:${probe}`);
    try {
      const res = await fetchWithTimeout(probe, { method, timeoutMs });
      if (DEBUG_WAKE) {
        console.timeEnd(`wake:${probe}`);
        console.debug(`→ ${probe} ${res.status} ${res.ok ? "OK" : "FAIL"}`);
      }
      onUpdate?.(base, { attempt: 0, done: false, status: res.status, pathTried: p });
      if (okIf(res.status)) return { ok: true, status: res.status, path: p };
    } catch (e: unknown) {
      onUpdate?.(base, { attempt: 0, done: false, error: String(e), pathTried: p });
      if (DEBUG_WAKE) console.debug(`⚠️ wake error ${probe}:`, e);
    }
  }
  return { ok: false };
}

async function wakeOne(
  base: string,
  paths: string[],
  method: "GET" | "HEAD",
  retries: number,
  timeoutMs: number,
  backoffMs: number,
  okIf: (s: number) => boolean,
  onUpdate?: WakeOpts["onUpdate"]
): Promise<boolean> {
  for (let i = 0; i <= retries; i++) {
    const attempt = i + 1;
    onUpdate?.(base, { attempt, done: false });

    const { ok, status, path } = await tryPathsOnce(
      base, paths, method, timeoutMs, okIf, onUpdate
    );

    if (ok) {
      onUpdate?.(base, { attempt, ok: true, done: true, status, pathTried: path });
      return true;
    }
    if (i < retries) await sleep(jitter(backoffMs * (i + 1)));
  }
  onUpdate?.(base, { attempt: retries + 1, ok: false, done: true });
  return false;
}

export async function wakeServices(opts: WakeOpts = {}): Promise<Record<string, boolean>> {
  const {
    bases = [],
    path = "/api/health",
    method = "GET",
    retries = 3,
    timeoutMs = 6000,
    backoffMs = 1200,
    endpoints = {},
    onUpdate,
    okIf = (s: number) => s < 500, // 2xx/3xx/4xx all mean "server is responding"
  } = opts;

  const allBases = Array.from(new Set([...ENV_BASES, ...bases]));
  const queue = [...allBases];
  const out: Array<[string, boolean]> = [];

  async function worker(): Promise<void> {
    while (queue.length) {
      const base = queue.shift() as string;
      await sleep(jitter(150, 0.8));
      const raw = endpoints[base] ?? path;
      const paths = Array.isArray(raw) ? raw.slice() : [raw]; // normalize (mutable)
      const ok = await wakeOne(base, paths, method, retries, timeoutMs, backoffMs, okIf, onUpdate);
      out.push([base, ok]);
    }
  }

  await Promise.all([worker(), worker()]);
  const result = Object.fromEntries(out) as Record<string, boolean>;

  if (Object.values(result).some(Boolean)) {
    window.dispatchEvent(new Event("services-awake"));
  }
  return result;
}