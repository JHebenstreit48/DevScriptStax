import type { Subpage } from '@/types/navigation';

export type NavLeaf = {
  urlPath: string;      // "/angular/basics/..."
  crumbs: string[];     // ["Front End","Angular","Basics","Fundamentals","Introduction"]
};

export function flattenNav(pages: Subpage[]): NavLeaf[] {
  const out: NavLeaf[] = [];

  const walk = (nodes: Subpage[], parent: string[]) => {
    for (const n of nodes) {
      const next = [...parent, n.name];

      if (n.path) {
        out.push({ urlPath: n.path, crumbs: next });
        continue;
      }

      if (n.subpages?.length) walk(n.subpages, next);
    }
  };

  walk(pages, []);
  return out;
}