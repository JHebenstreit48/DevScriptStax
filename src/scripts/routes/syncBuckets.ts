import path from 'node:path';
import type { Subpage } from '@/types/navigation/Subpage';

import { ensureDir, writeIfChanged, exists } from '@/scripts/shared/utils/fs';
import { pascalize } from '@/scripts/shared/utils/naming';
import { buildRouteModel } from '@/scripts/shared/model/buildRouteModel';
import { config } from '@/scripts/shared/config';

function importPathForGroup(args: {
  sectionFolder: string;
  topicFolder: string;
  bucketFolder: string;
  groupCrumbs: string[]; // [BucketName, ..., GroupName]
}) {
  // groupCrumbs includes bucket name as first element
  const mappedFolders = args.groupCrumbs.map((g) => config.groupFolderNameMap?.[g] ?? pascalize(g));
  const rel = mappedFolders.join('/');
  return `@/routes/Individual/Granularized/${args.sectionFolder}/${args.topicFolder}/${rel}`;
}

function fsPathForGroup(args: {
  sectionFolder: string;
  topicFolder: string;
  groupCrumbs: string[]; // [BucketName, ..., GroupName]
  ext: '.ts' | '.tsx';
}) {
  const mapped = args.groupCrumbs.map((g) => config.groupFolderNameMap?.[g] ?? pascalize(g));
  // file is the last crumb; parent dirs are everything before it
  const parent = mapped.slice(0, -1);
  const file = mapped.at(-1) ?? 'Group';
  return path.join(
    process.cwd(),
    'src',
    'routes',
    'Individual',
    'Granularized',
    args.sectionFolder,
    args.topicFolder,
    ...parent,
    `${file}${args.ext}`
  );
}

function makeAggregatorGroupFile(args: {
  groupName: string;        // "Core Concepts"
  childNames: string[];     // ["Components","Modules",...]
  childImportBase: (childName: string) => string;
}) {
  const lines: string[] = [];
  lines.push(`import { RouteObject } from "react-router-dom";`);
  lines.push(``);

  for (const child of args.childNames) {
    const varName = pascalize(child);
    const importPath = args.childImportBase(child);
    lines.push(`import ${varName} from "${importPath}";`);
  }

  lines.push(``);
  const fileVar = pascalize(args.groupName);
  lines.push(`const ${fileVar}: RouteObject[] = [`);
  for (const child of args.childNames) {
    const varName = pascalize(child);
    lines.push(`  ...${varName},`);
  }
  lines.push(`];`);
  lines.push(``);
  lines.push(`export default ${fileVar};`);
  lines.push(``);

  return lines.join('\n');
}

function makeBucketAggregatorFile(args: {
  bucketName: string; // "Basics"
  imports: Array<{ varName: string; importPath: string }>;
}) {
  const lines: string[] = [];
  lines.push(`import { RouteObject } from "react-router-dom";`);
  lines.push(``);

  for (const im of args.imports) {
    lines.push(`import ${im.varName} from "${im.importPath}";`);
  }

  lines.push(``);
  const fileVar = pascalize(args.bucketName);
  lines.push(`const ${fileVar}: RouteObject[] = [`);
  for (const im of args.imports) {
    lines.push(`  ...${im.varName},`);
  }
  lines.push(`];`);
  lines.push(``);
  lines.push(`export default ${fileVar};`);
  lines.push(``);

  return lines.join('\n');
}

export function syncBuckets(args: {
  pagesRoot: Subpage[];
  tab?: string;
  topic?: string;
  dryRun?: boolean;
}): { wrote: string[]; skipped: string[] } {
  const wrote: string[] = [];
  const skipped: string[] = [];

  const model = buildRouteModel(args.pagesRoot, { tab: args.tab, topic: args.topic });

  // 1) group aggregators (e.g. CoreConcepts.tsx)
  for (const section of model.sectionsInOrder) {
    for (const topic of section.topicsInOrder) {
      for (const agg of topic.aggregators) {
        // groupCrumbs includes bucket + ... + this group
        const outPath = fsPathForGroup({
          sectionFolder: agg.sectionFolder,
          topicFolder: agg.topicFolder,
          groupCrumbs: agg.groupCrumbs,
          ext: '.tsx', // keep your style consistency
        });

        const childImportBase = (childName: string) => {
          const childCrumbs = [...agg.groupCrumbs.slice(0, -1), agg.groupName, childName];
          // NOTE: agg.groupCrumbs already includes [Bucket, ..., groupName], so:
          // agg.groupCrumbs.slice(0,-1) gives [Bucket, ...parent]
          // then add groupName and childName
          // But groupName is already the last of agg.groupCrumbs.
          // So child crumbs should be [...agg.groupCrumbs, childName]
          const realChildCrumbs = [...agg.groupCrumbs, childName];
          return importPathForGroup({
            sectionFolder: agg.sectionFolder,
            topicFolder: agg.topicFolder,
            bucketFolder: agg.bucketFolder,
            groupCrumbs: realChildCrumbs,
          });
        };

        const content = makeAggregatorGroupFile({
          groupName: agg.groupName,
          childNames: agg.childGroupNames,
          childImportBase,
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

      // 2) bucket aggregators (Basics.ts, Advanced.ts...)
      for (const bucket of topic.bucketsInOrder) {
        const imports = bucket.childGroups.map((g) => {
          const varName = pascalize(g.name);

          // childGroups are immediate bucket children; import path points to their route file
          // which is under .../<Bucket>/<Group>.tsx OR .../<Bucket>/<Group>.ts(x)
          const importPath = importPathForGroup({
            sectionFolder: topic.sectionFolder,
            topicFolder: topic.topicFolder,
            bucketFolder: bucket.bucketFolder,
            groupCrumbs: [bucket.bucketName, g.name],
          });

          return { varName, importPath };
        });

        const bucketFileName = `${pascalize(bucket.bucketName)}.ts`; // your current bucket aggregators are .ts
        const outPath = path.join(
          process.cwd(),
          'src',
          'routes',
          'Individual',
          'Granularized',
          topic.sectionFolder,
          topic.topicFolder,
          bucketFileName
        );

        const content = makeBucketAggregatorFile({
          bucketName: bucket.bucketName,
          imports,
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
  }

  return { wrote, skipped };
}