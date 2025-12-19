import pages from "@/Navigation/Combined/Core/Pages";
import type { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import { parseArgs, matchesFilter } from "../core/args";
import { flattenNav } from "../core/flattenNav";
import { derive } from "../core/derive";
import { generateSectionRoutesFile } from "../core/routes";

function main() {
  const args = parseArgs(process.argv.slice(2));

  const leaves = flattenNav(pages as unknown as Subpage[]);
  const derived = leaves
    .map((l) => derive(l))
    .filter((d) => matchesFilter({ tab: args.tab, topic: args.topic }, d));

  // Group route entries by section
  const bySection = new Map<string, { sectionFolder: string; entries: { urlPath: string; lazyVarName: string; pageImportPath: string }[] }>();

  for (const d of derived) {
    const bucket = bySection.get(d.sectionFolder) ?? { sectionFolder: d.sectionFolder, entries: [] };
    bucket.entries.push({
      urlPath: d.urlPath,
      lazyVarName: d.lazyVarName,
      pageImportPath: d.pageImportPath,
    });
    bySection.set(d.sectionFolder, bucket);
  }

  let changed = 0;
  let total = 0;

  for (const [, bucket] of bySection) {
    total++;
    const result = generateSectionRoutesFile({
      sectionFolder: bucket.sectionFolder,
      entries: bucket.entries,
      dryRun: args.dryRun,
    });
    if (result.changed) changed++;
    console.log(`${args.dryRun ? "[dry-run] would write" : "wrote"} ${result.outPath}`);
  }

  console.log(`gen:routes tab=${args.tab ?? "(all)"} topic=${args.topic ?? "(all)"} dryRun=${!!args.dryRun}`);
  console.log(`Section files processed: ${total}`);
  console.log(`Changed/would-change: ${changed}`);
}

main();
