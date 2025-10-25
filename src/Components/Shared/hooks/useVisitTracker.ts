import { useEffect } from "react";
import { resolveBreadcrumbTrail } from "@/Navigation/Combined/Core/resolveBreadCrumbTrail";
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

function pathToNiceTitle(pathname: string): string {
  const last = decodeURIComponent(
    pathname.replace(/\/+$/, "").split("/").filter(Boolean).pop() || pathname
  );
  return last
    .replace(/[-_]+/g, " ")
    .replace(/\b([a-z])/g, (_, c) => c.toUpperCase());
}

function bestTitleSnapshot(pathname: string): string {
  const h1 = document.querySelector(TITLE_SELECTOR)?.textContent?.trim();
  if (h1) return h1;

  const trail = resolveBreadcrumbTrail(pathname);
  if (trail?.length && trail[0] !== "Unknown Page") return trail.join(" > ");

  const doc = (document.title || "").trim();
  if (doc && doc !== SITE_NAME) return doc;

  return pathToNiceTitle(pathname);
}

function upsert(pathname: string, title: string, bumpCount: boolean) {
  const now = Date.now();
  const visits = readVisits();
  const existing = visits.find((v) => v.path === pathname);

  const safeTitle =
    title && title !== SITE_NAME ? title : bestTitleSnapshot(pathname);

  if (existing) {
    if (bumpCount) existing.count += 1;
    existing.last = now;
    existing.title = safeTitle;
  } else {
    visits.unshift({
      path: pathname,
      title: safeTitle,
      count: bumpCount ? 1 : 0,
      last: now,
    });
  }

  writeVisits(visits.slice(0, 200));
}

// ✅ Persistent event listener — attaches once globally
if (!window.__DSX_TRACKER_LISTENER__) {
  window.addEventListener("page:title", (e: Event) => {
    const custom = e as CustomEvent<{ title: string; path: string }>;
    const { title, path } = custom.detail || {};
    if (path && typeof title === "string" && title.trim()) {
      upsert(path, title.trim(), /* bumpCount */ false);
    }
  });
  window.__DSX_TRACKER_LISTENER__ = true;
}

export function useVisitTracker(pathname: string) {
  useEffect(() => {
    if (!pathname || pathname === "/") return;

    let wrote = false;
    const delay = 200;
    const maxAttempts = 8;

    const finalize = (title: string) => {
      if (wrote) return;
      wrote = true;
      upsert(pathname, title, /* bumpCount */ true);
    };

    const tryCapture = (attempt: number) => {
      const title = bestTitleSnapshot(pathname);
      const looksGeneric =
        !title ||
        title === SITE_NAME ||
        title.toLowerCase() === "untitled page";

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