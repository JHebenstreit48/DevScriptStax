import path from 'node:path';
import pages from '@/domain/navigation/mainTabs';
import type { Subpage } from '@/types/navigation/Subpage';

import { parseArgs, matchesFilter } from '@/scripts/shared/args';
import { flattenNav } from '../shared/model/flattenNav';
import { derive } from '@/scripts/shared/model/derive';
import { createPageIfMissing } from '@/scripts/pages/pages';
import { config } from '@/scripts/shared/config';
import { matchesWithin } from '../shared/utils/within';

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
  const groupStems = new Map<string, Set<string>>();

  for (const d of derived) {
    const leafFolder = path.dirname(d.pageFsPath);

    groupCounts.set(leafFolder, (groupCounts.get(leafFolder) ?? 0) + 1);

    const set = groupStems.get(leafFolder) ?? new Set<string>();
    set.add(d.componentName); // stems = component names
    groupStems.set(leafFolder, set);
  }

  let created = 0;
  let skipped = 0;

  for (const d of derived) {
    if (created >= limit) break;

    const leafFolderFsPath = path.dirname(d.pageFsPath);
    const leafFolderParentFsPath = path.dirname(leafFolderFsPath);
    const expectedLeafCount = groupCounts.get(leafFolderFsPath) ?? 1;
    const expectedStems = groupStems.get(leafFolderFsPath) ?? new Set([d.componentName]);

    const res = createPageIfMissing({
      pageFsPath: d.pageFsPath,
      componentName: d.componentName,
      markdownFilePath: d.markdownFilePath,
      pageTitle: d.pageTitle,
      expectedLeafCount,
      expectedStems,
      leafFolderFsPath,
      leafFolderParentFsPath,
      dryRun: args.dryRun,
    });

    if (res === 'created') {
      created++;

      // ✅ Only print details in dry-run so it stays noise-free
      if (args.dryRun) {
        console.log(`[dry-run] would create: ${d.pageFsPath}`);
        console.log(`          import: ${d.pageImportPath}`);
        console.log(`          url:    ${d.urlPath}`);
        console.log(
          `          crumbs: ${[
            d.sectionCrumb,
            d.topicCrumb,
            ...d.groupFolders,
            d.componentName,
          ].join(' > ')}`
        );
        console.log('');
      }
    } else {
      skipped++;
    }
  }

  console.log(
    `gen:pages tab=${args.tab ?? '(all)'} topic=${args.topic ?? '(all)'} within=${
      args.within ?? '(all)'
    } dryRun=${!!args.dryRun}`
  );
  console.log(`Created: ${created}`);
  console.log(`Skipped (already existed): ${skipped}`);
  if (created >= limit) console.log(`Stopped early due to --limit ${limit}`);
}

main();