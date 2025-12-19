import path from "node:path";
import type { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";
import { config } from "../config";
import { ensureDir, exists, writeIfChanged } from "./fs";
import { pascalize, safeLazyVarName, sectionFolderName } from "./naming";

type Filter = {
  tab?: string;     // e.g. "Languages"
  topic?: string;   // e.g. "Dart"
  dryRun?: boolean;
  limit?: number;
};

type Result = {
  wrote: string[];
  skipped: string[];
  wouldWrite: string[];
};

function makeLeafGroupRoutesFile(args: {
  fileVarName: string;                 // e.g. ControlFlow
  leafChildren: Array<{ name: string; path: string }>;
  pageImportBaseDir: string;           // e.g. "@/Pages/MainTabs/Languages/Dart/Basics/ControlFlow"
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
    const baseName = pascalize(child.name);      // Conditionals
    const varName = uniqueVar(baseName);         // Conditionals (or Conditionals2 if duplicate)

    // One-line lazy import (matches your exact sample)
    lazyLines.push(
      `const ${varName} = lazy(() => import('${args.pageImportBaseDir}/${baseName}'));`
    );

    // Multi-line route object (matches your exact sample)
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
  ].join("\n");
}

function matchesFilter(filter: Filter, sectionName: string, topicName: string) {
  if (filter.tab && filter.tab !== sectionName) return false;
  if (filter.topic && filter.topic !== topicName) return false;
  return true;
}

/**
 * Generates ONLY "leaf-group" lazy route files:
 * A nav node qualifies if:
 * - it has subpages
 * - every child subpage has a `path` (i.e. they’re leaf pages)
 *
 * Output location (matches your current routes architecture):
 *   src/routes/Individual/Granularized/<SectionFolder>/<TopicFolder>/<GroupFolders...>/<NodeName>.tsx
 *
 * Example (Dart):
 *   src/routes/Individual/Granularized/Languages/Dart/Basics/Fundamentals.tsx
 *   src/routes/Individual/Granularized/Languages/Dart/Basics/Language.tsx
 *   ...
 */
export function generateLeafLazyRoutes(pagesRoot: Subpage[], filter: Filter): Result {
  const out: Result = { wrote: [], skipped: [], wouldWrite: [] };
  const limit = filter.limit ?? config.defaultLimit;
  let createdCount = 0;

  const routesRoot = path.join(process.cwd(), "src", "routes", "Individual", "Granularized");

  // Walk inside one topic subtree
  const walk = (section: Subpage, topic: Subpage, node: Subpage, groupPathCrumbs: string[]) => {
    if (createdCount >= limit) return;
    if (!node.subpages || node.subpages.length === 0) return;

    const leafChildren = node.subpages.filter((c) => !!c.path) as Array<{ name: string; path: string }>;
    const nonLeafChildren = node.subpages.filter((c) => !c.path);

    const isLeafGroup = leafChildren.length > 0 && nonLeafChildren.length === 0;

    if (isLeafGroup) {
      const sectionFolder = sectionFolderName(section.name);
      const topicFolder = pascalize(topic.name);

      // groupPathCrumbs is the folder chain from topic down to this node (excluding leaf pages)
      // e.g. ["Basics", "Fundamentals"]
      const groupFolders = groupPathCrumbs.map(pascalize);

      const fileVarName = pascalize(node.name); // Fundamentals, Language, ControlFlow, etc.

      // routes file path:
      // .../<Section>/<Topic>/<Groups...>/<NodeName>.tsx
      // For Dart: .../Languages/Dart/Basics/Fundamentals.tsx
      const outDir = path.join(routesRoot, sectionFolder, topicFolder, ...groupFolders.slice(0, -1));
      const outPath = path.join(outDir, `${fileVarName}.tsx`);

      // page import base dir:
      // "@/Pages/MainTabs/<Section>/<Topic>/<Groups...>"
      // For Dart Fundamentals: "@/Pages/MainTabs/Languages/Dart/Basics/Fundamentals"
      const pageImportBaseDir = `@/Pages/MainTabs/${sectionFolder}/${topicFolder}/${groupFolders.join("/")}`;

      const content = makeLeafGroupRoutesFile({
        fileVarName,
        leafChildren,
        pageImportBaseDir,
      });

      if (filter.dryRun) {
        out.wouldWrite.push(outPath);
      } else {
        // skip if it already exists (we don't overwrite your manual work)
        if (exists(outPath)) {
          out.skipped.push(outPath);
          return;
        }

        ensureDir(outDir);
        writeIfChanged(outPath, content);
        out.wrote.push(outPath);
      }

      createdCount++;
      return;
    }

    // Continue recursion into non-leaf children
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

      // Walk starting from topic subpages (e.g. Basics, Advanced, etc.)
      for (const topNode of topic.subpages) {
        // groupPath includes this node name (e.g. ["Basics"])
        walk(section, topic, topNode, [topNode.name]);
        if (createdCount >= limit) break;
      }
    }
  }

  return out;
}