import { useEffect } from "react";

const VISITS_KEY = "dsx.visits"; // [{path,title,count,last}]
const TITLE_SELECTOR = "main h1, .content h1, h1";

export type Visit = { path: string; title: string; count: number; last: number };

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

export function useVisitTracker(pathname: string) {
  useEffect(() => {
    if (!pathname) return;

    const title =
      (document.querySelector(TITLE_SELECTOR)?.textContent ||
        document.title ||
        pathname).trim();

    const now = Date.now();
    const list = readVisits();
    const existing = list.find((v) => v.path === pathname);

    if (existing) {
      existing.count++;
      existing.last = now;
      existing.title = title;
    } else {
      list.unshift({ path: pathname, title, count: 1, last: now });
    }

    // small cap to avoid unbounded growth
    writeVisits(list.slice(0, 200));
  }, [pathname]);
}