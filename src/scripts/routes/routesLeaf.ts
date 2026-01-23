import path from 'node:path';
import type { Subpage } from '@/types/navigation/Subpage';

import { config } from '../shared/config';
import { ensureDir, exists, writeIfChanged } from '@/scripts/shared/utils/fs';
import { pascalize, sectionFolderName } from '@/scripts/shared/utils/naming';
import { matchesWithin } from '@/scripts/shared/utils/within';

import {
  computeLeafRouteSignatureFromPaths,
  getLeafRouteSignatureIndex,
} from '@/scripts/shared/utils/scanExisting';

type Filter = {
  tab?: string;
  topic?: string;
  within?: string;
  dryRun?: boolean;
  limit?: number;
};

type Result = {
  wrote: string[];
  skipped: string[];
  wouldWrite: string[];
};

function makeLeafGroupRoutesFile(args: {
  fileVarName: string;
  leafChildren: Array<{ name: string; path: string }>;
  pageImportBaseDir: string;
}) {
  const used = new Map<string, number>();

  const lazyLines: string[] = [];
  const routeLines: string[] = [];

  const uniqueVar = (base: string) => {
    const n = used.get(base) ?? 0;
    used.set(base, n + 1);
    return n === 0 ? base : `${base}${n + 1}`;
  };

  for (const child of args.leafChildren) {
    const baseName = pascalize(child.name);
    const varName = uniqueVar(baseName);

    lazyLines.push(
      `const ${varName} = lazy(() => import('${args.pageImportBaseDir}/${baseName}'));`
    );

    routeLines.push(
      `  {\n` +
        `    path: '${child.path}',\n` +
        `    element: <${varName} />,\n` +
        `  },`
    );
  }

  return [
    `import { lazy } from 'react';`,
    `import { RouteObject } from 'react-router-dom';`,
    ``,
    ...lazyLines,
    ``,
    `const ${args.fileVarName}: RouteObject[] = [`,
    ...routeLines,
    `];`,
    ``,
    `export default ${args.fileVarName};`,
    ``,
  ].join('\n');
}

function matchesFilter(filter: Filter, sectionName: string, topicName: string) {
  if (filter.tab && filter.tab !== sectionName) return false;
  if (filter.topic && filter.topic !== topicName) return false;
  return true;
}

export function generateLeafLazyRoutes(pagesRoot: Subpage[], filter: Filter): Result {
  const out: Result = { wrote: [], skipped: [], wouldWrite: [] };
  const limit = filter.limit ?? config.defaultLimit;
  let createdCount = 0;

  const routesRoot = path.join(process.cwd(), 'src', 'routes', 'Individual', 'Granularized');
  const sigIdx = getLeafRouteSignatureIndex(routesRoot);

  const walk = (section: Subpage, topic: Subpage, node: Subpage, groupPathCrumbs: string[]) => {
    if (createdCount >= limit) return;
    if (!node.subpages || node.subpages.length === 0) return;

    // prune outside subtree
    const fakeCrumbs = [section.name, topic.name, ...groupPathCrumbs, '__leaf__'];
    if (!matchesWithin(filter.within, fakeCrumbs)) return;

    const leafChildren = node.subpages.filter((c) => !!c.path) as Array<{ name: string; path: string }>;
    const nonLeafChildren = node.subpages.filter((c) => !c.path);

    const isLeafGroup = leafChildren.length > 0 && nonLeafChildren.length === 0;

    if (isLeafGroup) {
      const sectionFolder = sectionFolderName(section.name);
      const topicFolder = pascalize(topic.name);

      const groupFolders = groupPathCrumbs.map(pascalize);
      const fileVarName = pascalize(node.name);

      const outDir = path.join(routesRoot, sectionFolder, topicFolder, ...groupFolders.slice(0, -1));
      const outPath = path.join(outDir, `${fileVarName}.tsx`);

      const pageImportBaseDir = `@/Pages/MainTabs/${sectionFolder}/${topicFolder}/${groupFolders.join('/')}`;

      const sig = computeLeafRouteSignatureFromPaths(leafChildren.map((c) => c.path));

      // If an equivalent route group already exists anywhere, skip (prevents duplicates on rename)
      if (sigIdx.has(sig)) {
        out.skipped.push(sigIdx.get(sig)!);
        return;
      }

      const content = makeLeafGroupRoutesFile({ fileVarName, leafChildren, pageImportBaseDir });

      if (filter.dryRun) {
        if (sigIdx.has(sig)) out.skipped.push(sigIdx.get(sig)!);
        else if (exists(outPath)) out.skipped.push(outPath);
        else out.wouldWrite.push(outPath);
        createdCount++;
        return;
      }

      if (exists(outPath)) {
        out.skipped.push(outPath);
        return;
      }

      ensureDir(outDir);
      writeIfChanged(outPath, content);
      out.wrote.push(outPath);

      // update in-memory index so later groups in same run see it
      sigIdx.set(sig, outPath);

      createdCount++;
      return;
    }

    for (const child of nonLeafChildren) {
      if (!child.subpages || child.subpages.length === 0) continue;
      walk(section, topic, child, [...groupPathCrumbs, child.name]);
      if (createdCount >= limit) return;
    }
  };

  for (const section of pagesRoot) {
    if (!section.subpages?.length) continue;

    for (const topic of section.subpages) {
      if (!topic.subpages?.length) continue;
      if (!matchesFilter(filter, section.name, topic.name)) continue;

      for (const topNode of topic.subpages) {
        walk(section, topic, topNode, [topNode.name]);
        if (createdCount >= limit) break;
      }
    }
  }

  return out;
}