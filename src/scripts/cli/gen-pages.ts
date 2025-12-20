import pages from '@/Navigation/Combined/Core/Pages';
import type { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import { parseArgs, matchesFilter } from '../core/args';
import { flattenNav } from '../core/flattenNav';
import { derive } from '../core/derive';
import { createPageIfMissing } from '../core/pages';
import { config } from '../config';
import { matchesWithin } from '../core/within'; // add this import

function main() {
  const args = parseArgs(process.argv.slice(2));
  const limit = args.limit ?? config.defaultLimit;

  const leaves = flattenNav(pages as unknown as Subpage[]);
  const derived = leaves
    .filter((l) => matchesWithin(args.within, l.crumbs)) // NEW
    .map((l) => derive(l))
    .filter((d) => matchesFilter({ tab: args.tab, topic: args.topic }, d));

  let created = 0;
  let skipped = 0;

  for (const d of derived) {
    if (created >= limit) break;

    const res = createPageIfMissing({
      pageFsPath: d.pageFsPath,
      componentName: d.componentName,
      markdownFilePath: d.markdownFilePath,
      pageTitle: d.pageTitle,
      dryRun: args.dryRun,
    });

    if (res === 'created') created++;
    else skipped++;
  }

  console.log(`gen:pages tab=${args.tab ?? '(all)'} topic=${args.topic ?? '(all)'} dryRun=${!!args.dryRun}`);
  console.log(`Created: ${created}`);
  console.log(`Skipped (already existed): ${skipped}`);
  if (created >= limit) console.log(`Stopped early due to --limit ${limit}`);
}

main();
