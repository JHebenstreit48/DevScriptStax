import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { readVisits, writeVisits } from "@/Components/Shared/hooks/useVisitTracker";
import { resolveBreadcrumbTrail } from "@/Navigation/Combined/Core/resolveBreadCrumbTrail";

const SITE_NAME = "DevScriptStax";

// --- helpers -----------------------------------------------------
function pathToNiceTitle(path: string): string {
  const last = decodeURIComponent(
    path.replace(/\/+$/, "").split("/").filter(Boolean).pop() || path
  );
  return last
    .replace(/[-_]+/g, " ")
    .replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
}

function displayTitle(path: string, title: string) {
  if (
    !title ||
    title === SITE_NAME ||
    title.toLowerCase() === "untitled page"
  ) {
    const trail = resolveBreadcrumbTrail(path);
    if (trail && trail.length && trail[0] !== "Unknown Page") {
      return trail.join(" > ");
    }
    return pathToNiceTitle(path);
  }
  return title;
}

// --- main component ----------------------------------------------
export default function QuickDash() {
  const [visits, setVisits] = useState(() =>
    readVisits().filter((v) => v.path !== "/") // 🚫 skip home
  );

  // Reactively update every few seconds or when window regains focus
  useEffect(() => {
    const sync = () =>
      setVisits(readVisits().filter((v) => v.path !== "/"));
    const i = setInterval(sync, 2000); // poll localStorage every 2s
    window.addEventListener("focus", sync);
    return () => {
      clearInterval(i);
      window.removeEventListener("focus", sync);
    };
  }, []);

  // one-time cleanup for bad titles
  useEffect(() => {
    if (!visits.length) return;
    let changed = false;
    const fixed = visits.map((v) => {
      const good = displayTitle(v.path, v.title);
      if (good !== v.title) {
        changed = true;
        return { ...v, title: good };
      }
      return v;
    });
    if (changed) {
      writeVisits(fixed);
      setVisits(fixed);
    }
  }, [visits]);

  // ✅ Hooks always run before the conditional return
  const mostVisited = useMemo(
    () => [...visits].sort((a, b) => b.count - a.count).slice(0, 8),
    [visits]
  );

  const recent = useMemo(
    () => [...visits].sort((a, b) => b.last - a.last).slice(0, 8),
    [visits]
  );

  // ✅ Safe early return after all hooks
  if (!visits.length) return null;

  return (
    <section className="quickDash">
      <div className="dashGroup">
        <h3>Most Visited</h3>
        <ul className="dashChips">
          {mostVisited.map((v) => (
            <li key={v.path}>
              <Link to={v.path} className="chip" title={`${v.count} visits`}>
                {displayTitle(v.path, v.title)}
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
              <Link to={v.path} className="chip">
                {displayTitle(v.path, v.title)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}