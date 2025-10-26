import { useEffect } from "react";
import "@/SCSS/Page/PageTitle.scss";

const normalizePath = (p: string) => {
  if (!p) return "/";
  try {
    // pathname only; drop query/hash; decode; strip trailing slash (except root)
    const u = new URL(p, window.location.origin);
    const clean = decodeURIComponent(u.pathname || "/");
    return clean !== "/" ? clean.replace(/\/+$/, "") : "/";
  } catch {
    const pathOnly = p.split("#")[0].split("?")[0] || "/";
    return pathOnly !== "/" ? decodeURIComponent(pathOnly).replace(/\/+$/, "") : "/";
  }
};

const PageTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    if (!title) return;
    const path = normalizePath(window.location.pathname);
    window.dispatchEvent(new CustomEvent("page:title", { detail: { title, path } }));
  }, [title]);

  if (!title) return null;
  return (
    <div className="pageTitleWrap">
      <h1 className="pageTitle">{title}</h1>
      <div className="pageTitleRule" aria-hidden="true" />
    </div>
  );
};

export default PageTitle;