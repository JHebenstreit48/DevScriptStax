import path from "node:path";
import pages from '@/Navigation/Combined/Core/Pages';
import type { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import { parseArgs, matchesFilter } from '../core/args';
import { flattenNav } from '../core/flattenNav';
import { derive } from '../core/derive';
import { createPageIfMissing } from '../core/pages';
import { config } from '../config';
import { matchesWithin } from '../core/within';

function main() {
  const args = parseArgs(process.argv.slice(2));
  const limit = args.limit ?? config.defaultLimit;

  const leaves = flattenNav(pages as unknown as Subpage[]);
  const derived = leaves
    .filter((l) => matchesWithin(args.within, l.crumbs))
    .map((l) => derive(l))
    .filter((d) => matchesFilter({ tab: args.tab, topic: args.topic }, d));

  // Group by leaf folder (directory containing the .tsx pages)
  const groupCounts = new Map<string, number>();
  for (const d of derived) {
    const leafFolder = path.dirname(d.pageFsPath);
    groupCounts.set(leafFolder, (groupCounts.get(leafFolder) ?? 0) + 1);
  }

  let created = 0;
  let skipped = 0;

  for (const d of derived) {
    if (created >= limit) break;

    const leafFolderFsPath = path.dirname(d.pageFsPath);
    const leafFolderParentFsPath = path.dirname(leafFolderFsPath);
    const expectedLeafCount = groupCounts.get(leafFolderFsPath) ?? 1;

    const res = createPageIfMissing({
      pageFsPath: d.pageFsPath,
      componentName: d.componentName,
      markdownFilePath: d.markdownFilePath,
      pageTitle: d.pageTitle,
      expectedLeafCount,
      leafFolderFsPath,
      leafFolderParentFsPath,
      dryRun: args.dryRun,
    });

    if (res === 'created') created++;
    else skipped++;
  }

  console.log(
    `gen:pages tab=${args.tab ?? '(all)'} topic=${args.topic ?? '(all)'} within=${args.within ?? '(all)'} dryRun=${!!args.dryRun}`
  );
  console.log(`Created: ${created}`);
  console.log(`Skipped (already existed): ${skipped}`);
  if (created >= limit) console.log(`Stopped early due to --limit ${limit}`);
}

main();