import path from 'node:path';
import type { Subpage } from '@/types/navigation/Subpage';

import { ensureDir, writeIfChanged } from '@/scripts/shared/utils/fs';
import { buildRouteModel } from '@/scripts/shared/model/buildRouteModel';
import { pascalize } from '@/scripts/shared/utils/naming';

function sectionFileBase(sectionFolder: string): string {
  // FrontEnd -> frontEnd, Languages -> languages, HTML -> html
  if (/^[A-Z0-9]+$/.test(sectionFolder)) return sectionFolder.toLowerCase();
  return sectionFolder.charAt(0).toLowerCase() + sectionFolder.slice(1);
}

function topicFileBase(topicFolder: string): string {
  if (/^[A-Z0-9]+$/.test(topicFolder)) return topicFolder.toLowerCase();
  return topicFolder.charAt(0).toLowerCase() + topicFolder.slice(1);
}

function makeSectionFile(args: {
  sectionFolder: string;
  topics: Array<{ topicCrumb: string; topicFolder: string }>; // in nav order
}) {
  const lines: string[] = [];
  lines.push(`import { RouteObject } from "react-router-dom";`);
  lines.push(``);

  for (const t of args.topics) {
    const varName = pascalize(t.topicCrumb);
    const fileBase = topicFileBase(t.topicFolder);
    lines.push(
      `import ${varName} from "@/routes/Individual/FullRoutes/${args.sectionFolder}/${fileBase}";`
    );
  }

  lines.push(``);
  const sectionVar = sectionFileBase(args.sectionFolder);
  lines.push(`const ${sectionVar}: RouteObject[] = [`);
  for (const t of args.topics) {
    const varName = pascalize(t.topicCrumb);
    lines.push(`  ...${varName},`);
  }
  lines.push(`];`);
  lines.push(``);
  lines.push(`export default ${sectionVar};`);
  lines.push(``);

  return lines.join('\n');
}

export function syncSections(args: {
  pagesRoot: Subpage[];
  dryRun?: boolean;
}): { wrote: string[]; skipped: string[] } {
  const wrote: string[] = [];
  const skipped: string[] = [];

  const model = buildRouteModel(args.pagesRoot);

  for (const section of model.sectionsInOrder) {
    const fileBase = sectionFileBase(section.sectionFolder);
    const outPath = path.join(process.cwd(), 'src', 'routes', 'Sections', `${fileBase}.ts`);

    const topics = section.topicsInOrder.map((t) => ({
      topicCrumb: t.topicCrumb,
      topicFolder: t.topicFolder,
    }));

    const content = makeSectionFile({
      sectionFolder: section.sectionFolder,
      topics,
    });

    if (args.dryRun) {
      wrote.push(outPath);
      continue;
    }

    ensureDir(path.dirname(outPath));
    const changed = writeIfChanged(outPath, content);
    if (changed) wrote.push(outPath);
    else skipped.push(outPath);
  }

  return { wrote, skipped };
}
