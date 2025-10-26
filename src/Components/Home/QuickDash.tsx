import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { readVisits, writeVisits, type Visit } from "@/Components/Shared/hooks/useVisitTracker";
import { resolveBreadcrumbTrail } from "@/Navigation/Combined/Core/resolveBreadCrumbTrail";
import { SITE_NAME } from "@/Components/Shared/dynamicSiteName";

/* ---------- Title cache ---------- */
const TITLES_KEY = "page_titles_v1";
const readTitleMap = (): Record<string, string> => {
  try { return JSON.parse(localStorage.getItem(TITLES_KEY) || "{}"); } catch { return {}; }
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
    const pathOnly = (p.split("#")[0].split("?")[0] || "/");
    return pathOnly !== "/" ? decodeURIComponent(pathOnly).replace(/\/+$/, "") : "/";
  }
};
const canonicalPath = (p: string) => normalizePath(p).toLowerCase();

const pathToNiceTitle = (path: string) => {
  const last = canonicalPath(path).split("/").filter(Boolean).pop() || "/";
  return last.replace(/[-_]+/g, " ").replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
};

const chooseTitle = (path: string, visitTitle: string, known: Record<string, string>): string => {
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

/* ---------- Component ---------- */
export default function QuickDash() {
  const [titles, setTitles] = useState<Record<string, string>>(() => readTitleMap());
  const [visits, setVisits] = useState<Visit[]>(() =>
    readVisits()
      .map(v => ({ ...v, path: canonicalPath(v.path), title: v.title ?? "" }))
      .filter(v => v.path !== "/")
  );

  // Keep visits fresh; overlay authoritative titles whenever titles change
  useEffect(() => {
    const sync = () => {
      const fresh: Visit[] = readVisits()
        .map(v => {
          const path = canonicalPath(v.path);
          const hard = titles[path];
          return { ...v, path, title: (hard ?? v.title ?? "") } as Visit;
        })
        .filter(v => v.path !== "/");
      setVisits(fresh);
    };
    const interval = setInterval(sync, 2000);
    window.addEventListener("focus", sync);
    sync();
    return () => { clearInterval(interval); window.removeEventListener("focus", sync); };
  }, [titles]);

  // Listen for authoritative titles from PageTitle.tsx
  useEffect(() => {
    const onPageTitle = (ev: Event) => {
      const d = (ev as CustomEvent).detail as { title?: string; path?: string } | undefined;
      if (!d?.title || !d?.path) return;
      const key = canonicalPath(d.path);
      const title = d.title;

      // Persist the hard title
      setTitles(prev => {
        if (prev[key] === title) return prev;
        const next = { ...prev, [key]: title };
        writeTitleMap(next);
        return next;
      });

      // Upgrade current visits immediately
      setVisits(prev => {
        let changed = false;
        const next: Visit[] = prev.map(v =>
          v.path === key && v.title !== title ? ((changed = true), { ...v, title } as Visit) : v
        );
        if (changed) writeVisits(next);
        return next;
      });
    };

    window.addEventListener("page:title", onPageTitle as EventListener);
    return () => window.removeEventListener("page:title", onPageTitle as EventListener);
  }, []);

  // One-pass fix-up: never downgrade if we have a hard title
  useEffect(() => {
    if (!visits.length) return;

    let changed = false;
    const fixed: Visit[] = visits.map(v => {
      const key = canonicalPath(v.path);
      const hard = titles[key];

      if (hard && v.title !== hard) { // enforce hard title
        changed = true;
        return { ...v, path: key, title: hard } as Visit;
      }

      const isPlaceholder = !v.title || v.title === SITE_NAME || v.title.toLowerCase() === "untitled page";
      if (isPlaceholder && !hard) {
        const trail = resolveBreadcrumbTrail(key);
        const leaf = (trail && trail.length && trail[0] !== "Unknown Page")
          ? trail[trail.length - 1]
          : pathToNiceTitle(key);
        if (leaf !== v.title) {
          changed = true;
          return { ...v, path: key, title: leaf } as Visit;
        }
      }
      return v;
    });

    if (changed) { writeVisits(fixed); setVisits(fixed); }
  }, [visits, titles]);

  const mostVisited = useMemo(() => [...visits].sort((a,b)=>b.count-a.count).slice(0,8), [visits]);
  const recent      = useMemo(() => [...visits].sort((a,b)=>b.last-a.last).slice(0,8),  [visits]);

  if (!visits.length) return null;

  return (
    <section className="quickDash">
      <div className="dashGroup">
        <h3>Most Visited</h3>
        <ul className="dashChips">
          {mostVisited.map(v => (
            <li key={v.path}>
              <Link
                to={v.path}
                className="chip"
                title={resolveBreadcrumbTrail(v.path).join(" > ")}
              >
                {chooseTitle(v.path, v.title, titles)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashGroup">
        <h3>Recently Opened</h3>
        <ul className="dashChips">
          {recent.map(v => (
            <li key={v.path}>
              <Link
                to={v.path}
                className="chip"
                title={resolveBreadcrumbTrail(v.path).join(" > ")}
              >
                {chooseTitle(v.path, v.title, titles)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}