import pages from '@/domain/navigation/mainTabs';
import type { Subpage } from '@/types/navigation/Subpage';

import { parseArgs } from '@/scripts/shared/args';

import { syncBuckets } from '@/scripts/routes/syncBuckets';
import { syncFullRoutes } from '@/scripts/routes/syncFullRoutes';
import { syncSections } from '@/scripts/routes/syncSections';

function main() {
  const args = parseArgs(process.argv.slice(2));
  const root = pages as unknown as Subpage[];

  const a = syncBuckets({
    pagesRoot: root,
    tab: args.tab,
    topic: args.topic,
    dryRun: args.dryRun,
  });

  const b = syncFullRoutes({
    pagesRoot: root,
    tab: args.tab,
    topic: args.topic,
    dryRun: args.dryRun,
  });

  const c = syncSections({
    pagesRoot: root,
    tab: args.tab,
    topic: args.topic,
    dryRun: args.dryRun,
  });

  const wrote = [...a.wrote, ...b.wrote, ...c.wrote];
  const skipped = [...a.skipped, ...b.skipped, ...c.skipped];

  console.log(
    `gen:stitch dryRun=${!!args.dryRun} tab=${args.tab ?? '(all)'} topic=${args.topic ?? '(all)'}`
  );
  console.log(`Wrote:   ${wrote.length}`);
  console.log(`Skipped: ${skipped.length}`);
}

main();