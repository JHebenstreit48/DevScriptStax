import path from "node:path";
import { writeIfChanged } from "@/scripts/shared/utils/fs";

export type RouteEntry = {
  urlPath: string;
  lazyVarName: string;
  pageImportPath: string;
};

function sectionGeneratedFilename(sectionFolder: string) {
  const base = sectionFolder.charAt(0).toLowerCase() + sectionFolder.slice(1);
  return `${base}.generated.tsx`;
}

export function generateSectionRoutesFile(args: {
  sectionFolder: string;
  entries: RouteEntry[];
  dryRun?: boolean;
}): { outPath: string; changed: boolean } {
  const outPath = path.join(process.cwd(), "src", "routes", "Sections", sectionGeneratedFilename(args.sectionFolder));

  // stable, de-duped by urlPath
  const byUrl = new Map<string, RouteEntry>();
  for (const e of args.entries) byUrl.set(e.urlPath, e);

  const ordered = Array.from(byUrl.values()).sort((a, b) => a.urlPath.localeCompare(b.urlPath));

  const lines: string[] = [];
  lines.push(`import { lazy } from 'react';`);
  lines.push(`import { RouteObject } from 'react-router-dom';`);
  lines.push(``);

  for (const e of ordered) {
    lines.push(`const ${e.lazyVarName} = lazy(() => import('${e.pageImportPath}'));`);
  }

  lines.push(``);
  lines.push(`const ${args.sectionFolder}: RouteObject[] = [`);

  for (const e of ordered) {
    lines.push(`  { path: '${e.urlPath}', element: <${e.lazyVarName} /> },`);
  }

  lines.push(`];`);
  lines.push(``);
  lines.push(`export default ${args.sectionFolder};`);
  lines.push(``);

  const content = lines.join("\n");

  if (args.dryRun) return { outPath, changed: true };
  const changed = writeIfChanged(outPath, content);
  return { outPath, changed };
}
