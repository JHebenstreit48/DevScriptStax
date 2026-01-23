import path from 'node:path';
import type { Subpage } from '@/types/navigation/Subpage';

import { ensureDir, writeIfChanged, exists } from '@/scripts/shared/utils/fs';
import { buildRouteModel } from '@/scripts/shared/model/buildRouteModel';
import { pascalize, topicFolderName } from '@/scripts/shared/utils/naming';

function topicFileBase(topicFolder: string): string {
  // CSS/HTML -> css/html, NextJS -> nextJS
  if (/^[A-Z0-9]+$/.test(topicFolder)) return topicFolder.toLowerCase();
  return topicFolder.charAt(0).toLowerCase() + topicFolder.slice(1);
}

function makeFullRoutesFile(args: {
  topicCrumb: string;
  sectionFolder: string;
  topicFolder: string;
  buckets: string[]; // bucket names
}) {
  const lines: string[] = [];
  lines.push(`import { RouteObject } from "react-router-dom";`);
  lines.push(``);

  for (const b of args.buckets) {
    const varName = pascalize(b);
    lines.push(
      `import ${varName} from "@/routes/Individual/Granularized/${args.sectionFolder}/${args.topicFolder}/${varName}";`
    );
  }

  lines.push(``);
  const topicVar = pascalize(args.topicCrumb);
  lines.push(`const ${topicVar}: RouteObject[] = [`);
  for (const b of args.buckets) {
    const varName = pascalize(b);
    lines.push(`  ...${varName},`);
  }
  lines.push(`];`);
  lines.push(`export default ${topicVar};`);
  lines.push(``);

  return lines.join('\n');
}

export function syncFullRoutes(args: {
  pagesRoot: Subpage[];
  tab?: string;
  topic?: string;
  dryRun?: boolean;
}): { wrote: string[]; skipped: string[] } {
  const wrote: string[] = [];
  const skipped: string[] = [];

  const model = buildRouteModel(args.pagesRoot, { tab: args.tab, topic: args.topic });

  for (const section of model.sectionsInOrder) {
    for (const topic of section.topicsInOrder) {
      const buckets = topic.bucketsInOrder.map((b) => b.bucketName);

      const topicVarFolder = topicFolderName(topic.topicCrumb); // stable
      const base = topicFileBase(topicVarFolder);
      const outPath = path.join(
        process.cwd(),
        'src',
        'routes',
        'Individual',
        'FullRoutes',
        topic.sectionFolder,
        `${base}.ts`
      );

      const content = makeFullRoutesFile({
        topicCrumb: topic.topicCrumb,
        sectionFolder: topic.sectionFolder,
        topicFolder: topic.topicFolder,
        buckets,
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
  }

  return { wrote, skipped };
}
