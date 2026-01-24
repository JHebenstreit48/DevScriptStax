import { useEffect, useMemo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  readVisits,
  writeVisits,
  type Visit,
} from "@/Components/Shared/hooks/useVisitTracker";
import { resolveBreadcrumbTrail } from "@/domain/navigation/breadcrumbs";
import { SITE_NAME } from "@/Components/Shared/dynamicSiteName";

/* ---------- Title cache ---------- */
const TITLES_KEY = "page_titles_v1";
const VISITS_KEY = "visits_v1"; // used only for storage event filtering; safe even if yours differs

const readTitleMap = (): Record<string, string> => {
  try {
    return JSON.parse(localStorage.getItem(TITLES_KEY) || "{}");
  } catch {
    return {};
  }
};
const writeTitleMap = (m: Record<string, string>) =>
  localStorage.setItem(TITLES_KEY, JSON.stringify(m));

/* ---------- Path + label helpers ---------- */
const normalizePath = (p: string) => {
  if (!p) return "/";
  try {
    const u = new URL(p, window.location.origin);
    const clean = decodeURIComponent(u.pathname || "/");
    return clean !== "/" ? clean.replace(/\/+$/, "") : "/";
  } catch {
    const pathOnly = p.split("#")[0].split("?")[0] || "/";
    return pathOnly !== "/" ? decodeURIComponent(pathOnly).replace(/\/+$/, "") : "/";
  }
};
const canonicalPath = (p: string) => normalizePath(p).toLowerCase();

const pathToNiceTitle = (path: string) => {
  const last = canonicalPath(path).split("/").filter(Boolean).pop() || "/";
  return last.replace(/[-_]+/g, " ").replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
};

const chooseTitle = (
  path: string,
  visitTitle: string,
  known: Record<string, string>
): string => {
  const key = canonicalPath(path);

  // 1) Authoritative PageTitle
  const hard = known[key];
  if (hard && hard.trim()) return hard;

  // 2) Already-good stored title
  if (visitTitle && visitTitle !== SITE_NAME && visitTitle.toLowerCase() !== "untitled page") {
    return visitTitle;
  }

  // 3) Breadcrumb leaf
  const trail = resolveBreadcrumbTrail(key);
  if (trail && trail.length && trail[0] !== "Unknown Page") return trail[trail.length - 1];

  // 4) Pretty path
  return pathToNiceTitle(key);
};

export default function QuickDash() {
  const [titles, setTitles] = useState<Record<string, string>>(() => readTitleMap());

  const [visits, setVisits] = useState<Visit[]>(() =>
    readVisits()
      .map((v) => ({ ...v, path: canonicalPath(v.path), title: v.title ?? "" }))
      .filter((v) => v.path !== "/")
  );

  /**
   * Sync visits from storage and overlay authoritative titles.
   * (Single source of truth: readVisits().)
   */
  const syncVisits = useCallback(() => {
    const fresh: Visit[] = readVisits()
      .map((v) => {
        const path = canonicalPath(v.path);
        const hard = titles[path];
        return { ...v, path, title: hard ?? (v.title ?? "") } as Visit;
      })
      .filter((v) => v.path !== "/");

    setVisits(fresh);
  }, [titles]);

  /**
   * Attach listeners ONCE (do not re-attach on titles updates).
   */
  useEffect(() => {
    const onFocus = () => syncVisits();
    const onVis = () => {
      if (!document.hidden) syncVisits();
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === TITLES_KEY || e.key === VISITS_KEY || e.key === null) {
        syncVisits();
      }
    };

    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("storage", onStorage);

    // initial sync
    syncVisits();

    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("storage", onStorage);
    };
  }, [syncVisits]);

  /**
   * Listen for authoritative titles from PageTitle.tsx
   */
  useEffect(() => {
    const onPageTitle = (ev: Event) => {
      const d = (ev as CustomEvent).detail as { title?: string; path?: string } | undefined;
      if (!d?.title || !d?.path) return;

      const key = canonicalPath(d.path);
      const title = d.title;

      // Persist the hard title
      setTitles((prev) => {
        if (prev[key] === title) return prev;
        const next = { ...prev, [key]: title };
        writeTitleMap(next);
        return next;
      });

      // Upgrade current visits immediately
      setVisits((prev) => {
        let changed = false;
        const next: Visit[] = prev.map((v) =>
          v.path === key && v.title !== title ? ((changed = true), { ...v, title } as Visit) : v
        );
        if (changed) writeVisits(next);
        return next;
      });
    };

    window.addEventListener("page:title", onPageTitle as EventListener);
    return () => window.removeEventListener("page:title", onPageTitle as EventListener);
  }, []);

  /**
   * One-pass fix-up: never downgrade if we have a hard title
   */
  useEffect(() => {
    if (!visits.length) return;

    let changed = false;
    const fixed: Visit[] = visits.map((v) => {
      const key = canonicalPath(v.path);
      const hard = titles[key];

      if (hard && v.title !== hard) {
        changed = true;
        return { ...v, path: key, title: hard } as Visit;
      }

      const isPlaceholder =
        !v.title || v.title === SITE_NAME || v.title.toLowerCase() === "untitled page";

      if (isPlaceholder && !hard) {
        const trail = resolveBreadcrumbTrail(key);
        const leaf =
          trail && trail.length && trail[0] !== "Unknown Page"
            ? trail[trail.length - 1]
            : pathToNiceTitle(key);

        if (leaf !== v.title) {
          changed = true;
          return { ...v, path: key, title: leaf } as Visit;
        }
      }

      return v;
    });

    if (changed) {
      writeVisits(fixed);
      setVisits(fixed);
    }
  }, [visits, titles]);

  const mostVisited = useMemo(
    () => [...visits].sort((a, b) => b.count - a.count).slice(0, 8),
    [visits]
  );
  const recent = useMemo(
    () => [...visits].sort((a, b) => b.last - a.last).slice(0, 8),
    [visits]
  );

  // Memoize tooltip strings (avoid repeated resolveBreadcrumbTrail calls in render)
  const tooltipMap = useMemo(() => {
    const m: Record<string, string> = {};
    for (const v of visits) {
      m[v.path] = resolveBreadcrumbTrail(v.path).join(" > ");
    }
    return m;
  }, [visits]);

  if (!visits.length) return null;

  return (
    <section className="quickDash">
      <div className="dashGroup">
        <h3>Most Visited</h3>
        <ul className="dashChips">
          {mostVisited.map((v) => (
            <li key={v.path}>
              <Link to={v.path} className="chip" title={tooltipMap[v.path] || ""}>
                {chooseTitle(v.path, v.title, titles)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashGroup">
        <h3>Recently Opened</h3>
        <ul className="dashChips">
          {recent.map((v) => (
            <li key={v.path}>
              <Link to={v.path} className="chip" title={tooltipMap[v.path] || ""}>
                {chooseTitle(v.path, v.title, titles)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}