import pages from '@/domain/navigation/mainTabs';
import type { Subpage } from '@/types/navigation/Subpage';

import { parseArgs } from '@/scripts/shared/args';

import { syncBuckets } from '@/scripts/routes/syncBuckets';
import { syncFullRoutes } from '@/scripts/routes/syncFullRoutes';
import { syncSections } from '@/scripts/routes/syncSections';
import { syncRouterIndex } from '@/scripts/routes/syncRouterIndex';

function main() {
  const args = parseArgs(process.argv.slice(2));

  const root = pages as unknown as Subpage[];

  const a = syncBuckets({ pagesRoot: root, tab: args.tab, topic: args.topic, dryRun: args.dryRun });
  const b = syncFullRoutes({ pagesRoot: root, tab: args.tab, topic: args.topic, dryRun: args.dryRun });
  const c = syncSections({ pagesRoot: root, dryRun: args.dryRun });
  const d = syncRouterIndex({ pagesRoot: root, dryRun: args.dryRun });

  const wrote = [...a.wrote, ...b.wrote, ...c.wrote, ...d.wrote];
  const skipped = [...a.skipped, ...b.skipped, ...c.skipped, ...d.skipped];

  console.log(`gen:stitch dryRun=${!!args.dryRun} tab=${args.tab ?? '(all)'} topic=${args.topic ?? '(all)'}`);
  console.log(`Wrote:   ${wrote.length}`);
  console.log(`Skipped: ${skipped.length}`);

  if (d.notes.length) {
    for (const n of d.notes) console.log(`note: ${n}`);
  }
}

main();