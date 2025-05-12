import { SearchMatch } from "./types";

export interface Subpage {
  name: string;
  path?: string;
  subpages?: Subpage[];
}

export function flattenNavigation(
  nav: Subpage[],
  parentBreadcrumbs: string[] = [],
  section: string | null = null
): SearchMatch[] {
  const flattened: SearchMatch[] = [];

  nav.forEach((item) => {
    const newBreadcrumbs = [...parentBreadcrumbs, item.name];

    // If it's a linkable page (has path), add it to the results
    if (item.path) {
      flattened.push({
        name: item.name,
        path: item.path,
        breadcrumbs: parentBreadcrumbs,
        section: section || parentBreadcrumbs[parentBreadcrumbs.length - 1] || "Uncategorized"
      });
    }

    // If it has subpages, recurse into them
    if (item.subpages) {
      const childSection = section ?? item.name;
      const children = flattenNavigation(item.subpages, newBreadcrumbs, childSection);
      flattened.push(...children);
    }
  });

  return flattened;
}
