import type { SearchMatch } from '@/types/navigation';
import type { Subpage } from '@/types/navigation';

export function flattenNavigation(
  nav: Subpage[],
  parentBreadcrumbs: string[] = [],
  section: string | null = null
): SearchMatch[] {
  const flattened: SearchMatch[] = [];

  nav.forEach((item) => {
    const newBreadcrumbs = [...parentBreadcrumbs, item.name];

    if (item.path) {
      flattened.push({
        name: item.name,
        path: item.path,
        filePath: item.filePath,
        breadcrumbs: parentBreadcrumbs,
        section: section || parentBreadcrumbs[parentBreadcrumbs.length - 1] || "Uncategorized"
      });
    }

    if (item.subpages) {
      const childSection = section ?? item.name;
      const children = flattenNavigation(item.subpages, newBreadcrumbs, childSection);
      flattened.push(...children);
    }
  });

  return flattened;
}