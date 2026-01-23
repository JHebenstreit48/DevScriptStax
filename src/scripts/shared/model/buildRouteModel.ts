import type { Subpage } from '@/types/navigation/Subpage';

import { config } from '@/scripts/shared/config';
import { pascalize, sectionFolderName, topicFolderName } from '@/scripts/shared/utils/naming';

export type BucketName = string;

export type LeafPage = {
  title: string;        // nav leaf name
  urlPath: string;      // '/angular/basics/...'
  crumbs: string[];     // [Tab, Topic, Bucket, ...groups, Leaf]
};

export type LeafGroup = {
  // This is a nav node whose children are ALL leaf pages (have .path)
  groupName: string;            // e.g. "Fundamentals", "Components"
  groupCrumbs: string[];        // [Bucket, ..., groupName]
  leafPages: LeafPage[];        // children with .path
  sectionFolder: string;        // e.g. "FrontEnd"
  topicFolder: string;          // e.g. "Angular"
  bucketFolder: string;         // e.g. "Basics" (pascalized)
  groupFolders: string[];       // mapped/pascalized folders for groupCrumbs
};

export type GroupAggregator = {
  // This is a nav node whose children are ALL non-leaf groups (no .path) AND it is not a bucket itself.
  groupName: string;            // e.g. "Core Concepts"
  groupCrumbs: string[];        // [Bucket, ..., groupName]
  childGroupNames: string[];    // e.g. ["Components","Modules","Services","Routing"]
  sectionFolder: string;
  topicFolder: string;
  bucketFolder: string;
  groupFolders: string[];
};

export type BucketModel = {
  bucketName: BucketName;       // "Basics"
  bucketFolder: string;         // "Basics"
  // immediate children under the bucket in nav order:
  childGroups: Array<{ name: string; kind: 'leafGroup' | 'aggregator' }>;
};

export type TopicModel = {
  sectionCrumb: string;         // "Front End"
  topicCrumb: string;           // "Angular"
  sectionFolder: string;        // "FrontEnd"
  topicFolder: string;          // "Angular"
  bucketsInOrder: BucketModel[];
  leafGroups: LeafGroup[];          // leaf-group route files (your existing generator creates these)
  aggregators: GroupAggregator[];   // aggregator route files like CoreConcepts.tsx
};

export type SectionModel = {
  sectionCrumb: string;
  sectionFolder: string;
  topicsInOrder: TopicModel[];
};

export type RouteModel = {
  sectionsInOrder: SectionModel[];
};

// ---------------------------------------------
// Helpers
// ---------------------------------------------

function mapGroupFolder(raw: string): string {
  return config.groupFolderNameMap?.[raw] ?? pascalize(raw);
}

function isLeaf(n: Subpage): n is Subpage & { path: string } {
  return !!(n as any).path;
}

function hasSubpages(n: Subpage): n is Subpage & { subpages: Subpage[] } {
  return Array.isArray((n as any).subpages) && (n as any).subpages.length > 0;
}

function matchesFilter(args: { tab?: string; topic?: string }, sectionName: string, topicName: string) {
  if (args.tab && args.tab !== sectionName) return false;
  if (args.topic && args.topic !== topicName) return false;
  return true;
}

// ---------------------------------------------
// Build model
// ---------------------------------------------

export function buildRouteModel(
  pagesRoot: Subpage[],
  opts: { tab?: string; topic?: string } = {}
): RouteModel {
  const sections: SectionModel[] = [];

  for (const section of pagesRoot) {
    if (!section.subpages?.length) continue;
    if (opts.tab && section.name !== opts.tab) continue;

    const sectionFolder = sectionFolderName(section.name);

    const topics: TopicModel[] = [];

    for (const topic of section.subpages) {
      if (!topic.subpages?.length) continue;
      if (!matchesFilter(opts, section.name, topic.name)) continue;

      const topicFolder = topicFolderName(topic.name);

      const leafGroups: LeafGroup[] = [];
      const aggregators: GroupAggregator[] = [];
      const bucketsInOrder: BucketModel[] = [];

      // topic.subpages are usually buckets (Basics/Advanced/Testing/Tools/etc)
      for (const bucket of topic.subpages) {
        if (!bucket.subpages?.length) continue;

        const bucketName = bucket.name;
        const bucketFolder = pascalize(bucketName);

        const childGroups: Array<{ name: string; kind: 'leafGroup' | 'aggregator' }> = [];

        // Walk the subtree under the bucket and collect:
        // - leaf groups (node whose children all have path)
        // - aggregator groups (node whose children are all non-leaf)
        const walk = (node: Subpage, groupCrumbs: string[]) => {
          if (!hasSubpages(node)) return;

          const leafKids = node.subpages.filter(isLeaf);
          const nonLeafKids = node.subpages.filter((c) => !isLeaf(c));

          const isLeafGroup = leafKids.length > 0 && nonLeafKids.length === 0;
          const isAggregatorGroup = leafKids.length === 0 && nonLeafKids.length > 0;

          if (isLeafGroup) {
            // node itself becomes a leaf-group route file
            const groupFolders = groupCrumbs.map(mapGroupFolder);

            leafGroups.push({
              groupName: node.name,
              groupCrumbs,
              leafPages: leafKids.map((k) => ({
                title: k.name,
                urlPath: (k as any).path!,
                crumbs: [section.name, topic.name, ...groupCrumbs, k.name],
              })),
              sectionFolder,
              topicFolder,
              bucketFolder,
              groupFolders,
            });
            return;
          }

          if (isAggregatorGroup) {
            const groupFolders = groupCrumbs.map(mapGroupFolder);
            aggregators.push({
              groupName: node.name,
              groupCrumbs,
              childGroupNames: nonLeafKids.map((c) => c.name),
              sectionFolder,
              topicFolder,
              bucketFolder,
              groupFolders,
            });

            for (const child of nonLeafKids) {
              walk(child, [...groupCrumbs, child.name]);
            }
            return;
          }
        };

        // bucket children (immediate) determine what bucket aggregator imports/spreads
        for (const top of bucket.subpages) {
          if (!top.subpages?.length) continue;

          const leafKids = top.subpages.filter(isLeaf);
          const nonLeafKids = top.subpages.filter((c) => !isLeaf(c));

          const topIsLeafGroup = leafKids.length > 0 && nonLeafKids.length === 0;
          const topIsAggregator = leafKids.length === 0 && nonLeafKids.length > 0;

          childGroups.push({
            name: top.name,
            kind: topIsLeafGroup ? 'leafGroup' : topIsAggregator ? 'aggregator' : 'aggregator',
          });

          // Walk from this top node for deeper aggregates/leaves
          walk(top, [bucketName, top.name]);
        }

        bucketsInOrder.push({
          bucketName,
          bucketFolder,
          childGroups,
        });
      }

      topics.push({
        sectionCrumb: section.name,
        topicCrumb: topic.name,
        sectionFolder,
        topicFolder,
        bucketsInOrder,
        leafGroups,
        aggregators,
      });
    }

    sections.push({
      sectionCrumb: section.name,
      sectionFolder,
      topicsInOrder: topics,
    });
  }

  return { sectionsInOrder: sections };
}
