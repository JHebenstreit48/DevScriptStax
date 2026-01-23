import path from 'node:path';
import type { Subpage } from '@/types/navigation/Subpage';

import { readText, writeIfChanged, exists } from '@/scripts/shared/utils/fs';
import { buildRouteModel } from '@/scripts/shared/model/buildRouteModel';

function sectionFileBase(sectionFolder: string): string {
  if (/^[A-Z0-9]+$/.test(sectionFolder)) return sectionFolder.toLowerCase();
  return sectionFolder.charAt(0).toLowerCase() + sectionFolder.slice(1);
}

function replaceSectionImports(src: string, sectionVars: string[]): string {
  // Remove existing imports of the same section vars (best-effort)
  const lines = src.split('\n');

  const kept: string[] = [];
  const importRe = /^\s*import\s+([A-Za-z0-9_]+)\s+from\s+['"]@\/routes\/Sections\/[^'"]+['"];\s*$/;

  for (const line of lines) {
    const m = line.match(importRe);
    if (m && sectionVars.includes(m[1])) {
      continue; // drop old
    }
    kept.push(line);
  }

  // Insert new imports after the last "special page" import block.
  const newImports = sectionVars.map(
    (v) => `import ${v} from '@/routes/Sections/${v}';`
  );

  // Find insertion point: after the last import from '@/Pages/' or '@/App' or similar.
  let insertAt = 0;
  for (let i = 0; i < kept.length; i++) {
    if (kept[i].startsWith('import ')) insertAt = i + 1;
  }

  kept.splice(insertAt, 0, ...newImports);

  return kept.join('\n');
}

function replaceChildrenSpreads(src: string, sectionVars: string[]): string {
  // Find "children: [" and replace the spread lines of our sections.
  const startIdx = src.indexOf('children: [');
  if (startIdx === -1) return src;

  // Find the end of that array by scanning forward counting brackets naively
  const afterStart = src.slice(startIdx);
  const endRel = afterStart.indexOf('],', afterStart.indexOf('children: ['));
  if (endRel === -1) return src;

  const before = src.slice(0, startIdx);
  const block = src.slice(startIdx, startIdx + endRel + 2); // include "],"
  const after = src.slice(startIdx + endRel + 2);

  const lines = block.split('\n');

  const out: string[] = [];
  const spreadRe = /^\s*\.\.\.([A-Za-z0-9_]+)\s*,\s*$/;

  for (const line of lines) {
    const m = line.match(spreadRe);
    if (m && sectionVars.includes(m[1])) {
      // drop existing spreads for our sections
      continue;
    }
    out.push(line);
  }

  // Insert spreads right after the last fixed route object line (the About line)
  let insertAt = out.length - 1;
  for (let i = 0; i < out.length; i++) {
    if (out[i].includes(`{ path: 'about'`) || out[i].includes(`{ path: "about"`)) {
      insertAt = i + 1;
      break;
    }
  }

  const indent = '      ';
  const spreadLines = sectionVars.map((v) => `${indent}...${v},`);

  out.splice(insertAt, 0, ...spreadLines);

  return before + out.join('\n') + after;
}

export function syncRouterIndex(args: {
  pagesRoot: Subpage[];
  dryRun?: boolean;
}): { wrote: string[]; skipped: string[]; notes: string[] } {
  const wrote: string[] = [];
  const skipped: string[] = [];
  const notes: string[] = [];

  const routerPath = path.join(process.cwd(), 'src', 'routes', 'index.tsx');
  if (!exists(routerPath)) {
    notes.push(`router file not found: ${routerPath}`);
    return { wrote, skipped, notes };
  }

  const model = buildRouteModel(args.pagesRoot);
  const sectionVars = model.sectionsInOrder.map((s) => sectionFileBase(s.sectionFolder));

  const original = readText(routerPath);

  let next = original;
  next = replaceSectionImports(next, sectionVars);
  next = replaceChildrenSpreads(next, sectionVars);

  if (next === original) {
    skipped.push(routerPath);
    return { wrote, skipped, notes };
  }

  if (args.dryRun) {
    wrote.push(routerPath);
    return { wrote, skipped, notes };
  }

  const changed = writeIfChanged(routerPath, next);
  if (changed) wrote.push(routerPath);
  else skipped.push(routerPath);

  return { wrote, skipped, notes };
}