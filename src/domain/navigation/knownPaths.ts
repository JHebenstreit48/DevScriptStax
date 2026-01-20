import type { Subpage } from "@/types/navigation";
import pages from "@/domain/navigation/mainTabs";

/** Walk a Subpage tree and collect any defined `path`. */
function collectPaths(node: Subpage, out: Set<string>) {
  if (node.path) out.add(normalizePath(node.path));
  if (node.subpages) {
    for (const child of node.subpages) collectPaths(child, out);
  }
}

function normalizePath(p: string): string {
  // normalize trailing slashes so "/x" and "/x/" behave the same
  if (p.length > 1) return p.replace(/\/+$/, "");
  return p;
}

export const KNOWN_PATHS: Set<string> = (() => {
  const set = new Set<string>();
  for (const root of pages) collectPaths(root, set);
  return set;
})();

export function isKnownPath(pathname: string): boolean {
  return KNOWN_PATHS.has(normalizePath(pathname));
}