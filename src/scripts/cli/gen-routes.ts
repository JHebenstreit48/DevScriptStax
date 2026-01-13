import pages from '@/Navigation/Combined/Core/Pages';
import type { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import { parseArgs } from '../core/args';
import { generateLeafLazyRoutes } from '../core/routesLeaf';

function main() {
  const args = parseArgs(process.argv.slice(2));

  const result = generateLeafLazyRoutes(pages as unknown as Subpage[], {
    tab: args.tab,
    topic: args.topic,
    within: args.within,
    dryRun: args.dryRun,
    limit: args.limit,
  });

  // if (args.dryRun) {
  //   for (const p of result.wouldWrite) console.log(`[dry-run] would write ${p}`);
  // } else {
  //   for (const p of result.wrote) console.log(`wrote ${p}`);
  // }

  console.log(
    `gen:routes tab=${args.tab ?? '(all)'} topic=${args.topic ?? '(all)'} within=${args.within ?? '(all)'} dryRun=${!!args.dryRun}`
  );
  console.log(`Wrote: ${result.wrote.length}`);
  console.log(`Skipped (already existed): ${result.skipped.length}`);
  console.log(`Would write: ${result.wouldWrite.length}`);
  if (args.limit) console.log(`Limit: ${args.limit}`);
}

main();