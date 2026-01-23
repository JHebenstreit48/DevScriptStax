import pages from '@/domain/navigation/mainTabs';
import type { Subpage } from '@/types/navigation';

import { parseArgs, matchesFilter } from "@/scripts/shared/args";
import { flattenNav } from "@/scripts/shared/model/flattenNav";
import { derive } from "@/scripts/shared/model/derive";
import { fileExists } from "@/scripts/shared/utils/scanExisting";

function main() {
  const args = parseArgs(process.argv.slice(2));
  const leaves = flattenNav(pages as unknown as Subpage[]);

  const derived = leaves
    .map((l) => derive(l))
    .filter((d) => matchesFilter({ tab: args.tab, topic: args.topic }, d));

  const missingPages = derived.filter((d) => !fileExists(d.pageFsPath));

  // Routes: in section-level mode, route files are per-section; "missing routes"
  // means: section file missing OR (if it exists) we still compute missing pages/routes primarily by pages.
  const sections = Array.from(new Set(derived.map((d) => d.sectionFolder))).sort();
  const missingRouteSectionFiles = sections.filter((section) => {
    const base = section.charAt(0).toLowerCase() + section.slice(1);
    const outPath = `${process.cwd()}/src/routes/Sections/${base}.generated.tsx`;
    return !fileExists(outPath);
  });

  console.log(`Filter: tab=${args.tab ?? "(all)"} topic=${args.topic ?? "(all)"}`);
  console.log(`Leaf paths in scope: ${derived.length}`);
  console.log(`Missing pages: ${missingPages.length}`);
  if (missingPages.length) {
    for (const d of missingPages.slice(0, 200)) {
      console.log(`  - ${d.pageFsPath}`);
    }
    if (missingPages.length > 200) console.log(`  ...and ${missingPages.length - 200} more`);
  }
  console.log(`Sections in scope: ${sections.length}`);
  console.log(`Missing section route files: ${missingRouteSectionFiles.length}`);
  if (missingRouteSectionFiles.length) {
    for (const s of missingRouteSectionFiles) console.log(`  - src/routes/Sections/${s.charAt(0).toLowerCase() + s.slice(1)}.generated.tsx`);
  }
}

main();