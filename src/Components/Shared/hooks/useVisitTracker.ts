import { useEffect } from "react";
import { resolveBreadcrumbTrail } from "@/domain/navigation/breadcrumbs";
import { SITE_NAME } from "@/Components/Shared/dynamicSiteName";

// Extend Window to include our flag
declare global {
  interface Window {
    __DSX_TRACKER_LISTENER__?: boolean;
  }
}

const VISITS_KEY = "dsx.visits";
const TITLE_SELECTOR = ".pageTitle, main h1, .content h1, h1";

export type Visit = { path: string; title: string; count: number; last: number };

/* ---------------- Path helpers ---------------- */
function normalizePath(p: string): string {
  if (!p) return "/";
  try {
    const u = new URL(p, window.location.origin);
    const clean = decodeURIComponent(u.pathname || "/");
    return clean !== "/" ? clean.replace(/\/+$/, "") : "/";
  } catch {
    const pathOnly = (p.split("#")[0].split("?")[0] || "/");
    return pathOnly !== "/" ? decodeURIComponent(pathOnly).replace(/\/+$/, "") : "/";
  }
}
function canonicalPath(p: string): string {
  return normalizePath(p).toLowerCase();
}

/* ---------------- Storage ---------------- */
export function readVisits(): Visit[] {
  try {
    return JSON.parse(localStorage.getItem(VISITS_KEY) || "[]");
  } catch {
    return [];
  }
}
export function writeVisits(v: Visit[]) {
  localStorage.setItem(VISITS_KEY, JSON.stringify(v));
}

/* ---------------- Title helpers ---------------- */
function pathToNiceTitle(pathname: string): string {
  const last = decodeURIComponent(
    normalizePath(pathname).split("/").filter(Boolean).pop() || pathname
  );
  return last.replace(/[-_]+/g, " ").replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
}

function bestTitleSnapshot(pathname: string): string {
  // 1) Actual H1 if present (often your PageTitle)
  const h1 = document.querySelector(TITLE_SELECTOR)?.textContent?.trim();
  if (h1) return h1;

  // 2) Breadcrumb trail (generic)
  const trail = resolveBreadcrumbTrail(pathname);
  if (trail?.length && trail[0] !== "Unknown Page") return trail.join(" > ");

  // 3) Document title (generic-ish but better than nothing)
  const doc = (document.title || "").trim();
  if (doc && doc !== SITE_NAME) return doc;

  // 4) Last path segment prettified
  return pathToNiceTitle(pathname);
}

function isGenericTitle(t: string): boolean {
  if (!t) return true;
  const s = t.trim();
  if (!s || s === SITE_NAME) return true;
  if (s.toLowerCase() === "untitled page") return true;
  // Treat breadcrumb trails as generic (we prefer a real page title)
  if (s.includes(" > ")) return true;
  return false;
}

/* ---------------- Upsert with "never downgrade" ---------------- */
/**
 * Upserts a visit. If `isHard` is true, the title is authoritative
 * (from PageTitle) and must never be overwritten by softer sources.
 */
function upsert(pathname: string, title: string, bumpCount: boolean, isHard = false) {
  const now = Date.now();
  const key = canonicalPath(pathname);

  // Read & normalize existing visits (also collapse any duplicates by path)
  const visits = readVisits()
    .map(v => ({ ...v, path: canonicalPath(v.path), title: v.title ?? "" }))
    .reduce<Visit[]>((acc, v) => {
      const i = acc.findIndex(x => x.path === v.path);
      if (i === -1) acc.push(v);
      else {
        // merge counts/last conservatively
        acc[i] = {
          path: v.path,
          title: acc[i].title || v.title,
          count: Math.max(acc[i].count, v.count),
          last: Math.max(acc[i].last, v.last),
        };
      }
      return acc;
    }, []);

  const existing = visits.find((v) => v.path === key);

  const incoming = (isHard ? title.trim() : (title && !isGenericTitle(title) ? title : bestTitleSnapshot(key)));
  const safeIncoming = incoming || pathToNiceTitle(key);

  if (existing) {
    if (bumpCount) existing.count += 1;
    existing.last = now;

    if (isHard) {
      // Authoritative wins, always.
      existing.title = safeIncoming;
    } else {
      // Only upgrade if current title is generic.
      if (isGenericTitle(existing.title)) {
        existing.title = safeIncoming;
      }
      // else: keep the better (non-generic) one we already have.
    }
  } else {
    visits.unshift({
      path: key,
      title: safeIncoming,
      count: bumpCount ? 1 : 0,
      last: now,
    });
  }

  writeVisits(visits.slice(0, 200));
}

/* ---------------- Global event listener (authoritative) ---------------- */
if (!window.__DSX_TRACKER_LISTENER__) {
  window.addEventListener("page:title", (e: Event) => {
    const custom = e as CustomEvent<{ title: string; path: string }>;
    const { title, path } = custom.detail || {};
    if (path && typeof title === "string" && title.trim()) {
      // 🔒 Authoritative write; do not downgrade later
      upsert(path, title.trim(), /* bumpCount */ false, /* isHard */ true);
    }
  });
  window.__DSX_TRACKER_LISTENER__ = true;
}

/* ---------------- Hook ---------------- */
export function useVisitTracker(pathname: string) {
  useEffect(() => {
    if (!pathname) return;
    const key = canonicalPath(pathname);
    if (key === "/") return;

    let wrote = false;
    const delay = 200;
    const maxAttempts = 8;

    const finalize = (title: string) => {
      if (wrote) return;
      wrote = true;
      // Soft write: bumps count but will NOT overwrite a non-generic title
      upsert(key, title, /* bumpCount */ true, /* isHard */ false);
    };

    const tryCapture = (attempt: number) => {
      const title = bestTitleSnapshot(key);
      const looksGeneric = isGenericTitle(title);
      if (looksGeneric && attempt < maxAttempts) {
        setTimeout(() => tryCapture(attempt + 1), delay);
        return;
      }
      finalize(title);
    };

    const timer = setTimeout(() => tryCapture(0), delay);
    return () => clearTimeout(timer);
  }, [pathname]);
}