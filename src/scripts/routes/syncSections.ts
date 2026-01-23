import path from 'node:path';
import fs from 'node:fs';
import type { Subpage } from '@/types/navigation/Subpage';

import { ensureDir, exists, readText, writeIfChanged } from '@/scripts/shared/utils/fs';
import { buildRouteModel } from '@/scripts/shared/model/buildRouteModel';
import { pascalize, topicFolderName } from '@/scripts/shared/utils/naming';

function sectionVarName(sectionFolder: string): string {
  // FrontEnd -> frontEnd, Languages -> languages, HTML -> html
  if (/^[A-Z0-9]+$/.test(sectionFolder)) return sectionFolder.toLowerCase();
  return sectionFolder.charAt(0).toLowerCase() + sectionFolder.slice(1);
}

function topicFileBase(topicFolder: string): string {
  // NextJS -> nextJS, HTML -> html
  if (/^[A-Z0-9]+$/.test(topicFolder)) return topicFolder.toLowerCase();
  return topicFolder.charAt(0).toLowerCase() + topicFolder.slice(1);
}

function ensureImportLine(lines: string[], importLine: string): string[] {
  if (lines.some((l) => l.trim() === importLine.trim())) return lines;

  // Insert after last import (do not reorder existing imports)
  let insertAt = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) insertAt = i + 1;
  }

  const next = lines.slice();
  next.splice(insertAt, 0, importLine);
  return next;
}

function ensureSpreadInArrayBlock(fileText: string, arrayVar: string, spreadVar: string): string {
  const startRe = new RegExp(`const\\s+${arrayVar}\\s*:\\s*RouteObject\\[\\]\\s*=\\s*\\[`, 'm');
  const startMatch = fileText.match(startRe);
  if (!startMatch) return fileText;

  const startIdx = startMatch.index ?? -1;
  if (startIdx < 0) return fileText;

  const afterStart = fileText.slice(startIdx);
  const endRel = afterStart.indexOf('];');
  if (endRel === -1) return fileText;

  const block = afterStart.slice(0, endRel + 2);
  if (block.includes(`...${spreadVar}`)) return fileText;

  const lines = block.split('\n');
  const closeIdx = lines.findIndex((l) => l.trim() === '];');
  if (closeIdx === -1) return fileText;

  const anySpread = lines.find((l) => l.includes('...'));
  const indent = anySpread ? anySpread.match(/^\s*/)?.[0] ?? '  ' : '  ';

  lines.splice(closeIdx, 0, `${indent}...${spreadVar},`);

  const newBlock = lines.join('\n');
  return fileText.slice(0, startIdx) + newBlock + fileText.slice(startIdx + block.length);
}

function resolveTargetSection(args: {
  model: ReturnType<typeof buildRouteModel>;
  tab?: string;
  topic?: string;
}):
  | null
  | {
      sectionFolder: string;
      topicsToEnsure: Array<{ topicCrumb: string; topicFolder: string }>;
    } {
  const sections = args.model.sectionsInOrder;

  // If tab provided, target exactly that section
  if (args.tab) {
    const s = sections.find((x) => x.sectionCrumb === args.tab);
    if (!s) return null;

    if (args.topic) {
      const t = s.topicsInOrder.find((tt) => tt.topicCrumb === args.topic);
      if (!t) return null;

      return {
        sectionFolder: s.sectionFolder,
        topicsToEnsure: [{ topicCrumb: t.topicCrumb, topicFolder: t.topicFolder }],
      };
    }

    // tab only: still only touch ONE section file, but ensure all topics in that tab
    return {
      sectionFolder: s.sectionFolder,
      topicsToEnsure: s.topicsInOrder.map((t) => ({ topicCrumb: t.topicCrumb, topicFolder: t.topicFolder })),
    };
  }

  // If only topic provided, find which section owns it
  if (args.topic) {
    for (const s of sections) {
      const t = s.topicsInOrder.find((tt) => tt.topicCrumb === args.topic);
      if (!t) continue;

      return {
        sectionFolder: s.sectionFolder,
        topicsToEnsure: [{ topicCrumb: t.topicCrumb, topicFolder: t.topicFolder }],
      };
    }
    return null;
  }

  // Not scoped => do nothing (prevents mass edits)
  return null;
}

function makeNewSectionFile(args: {
  sectionFolder: string;
  topics: Array<{ topicCrumb: string; topicFolder: string }>;
}) {
  const lines: string[] = [];
  lines.push(`import { RouteObject } from "react-router-dom";`);
  lines.push(``);

  for (const t of args.topics) {
    const varName = pascalize(t.topicCrumb);
    const fileBase = topicFileBase(t.topicFolder);
    lines.push(`import ${varName} from "@/routes/Individual/FullRoutes/${args.sectionFolder}/${fileBase}";`);
  }

  lines.push(``);
  const sectionVar = sectionVarName(args.sectionFolder);
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
  tab?: string;
  topic?: string;
  dryRun?: boolean;
}): { wrote: string[]; skipped: string[] } {
  const wrote: string[] = [];
  const skipped: string[] = [];

  const model = buildRouteModel(args.pagesRoot);
  const target = resolveTargetSection({ model, tab: args.tab, topic: args.topic });

  // ✅ Not scoped = touch nothing
  if (!target) return { wrote, skipped };

  const sectionVar = sectionVarName(target.sectionFolder);
  const outPath = path.join(process.cwd(), 'src', 'routes', 'Sections', `${sectionVar}.ts`);

  // Create the section file if missing (only this one)
  if (!exists(outPath)) {
    const content = makeNewSectionFile({
      sectionFolder: target.sectionFolder,
      topics: target.topicsToEnsure,
    });

    if (args.dryRun) {
      wrote.push(outPath);
      return { wrote, skipped };
    }

    ensureDir(path.dirname(outPath));
    const changed = writeIfChanged(outPath, content);
    if (changed) wrote.push(outPath);
    else skipped.push(outPath);
    return { wrote, skipped };
  }

  // Patch-only mode: add missing import/spread lines; do NOT reorder
  const original = readText(outPath);
  let lines = original.split('\n');

  for (const t of target.topicsToEnsure) {
    const varName = pascalize(t.topicCrumb);

    // Use topicFolder from model, but also allow deterministic mapping via topicFolderName
    // (if your model already returns correct topicFolder, this is harmless)
    const topicFolder = t.topicFolder ?? topicFolderName(t.topicCrumb);
    const fileBase = topicFileBase(topicFolder);

    const importLine = `import ${varName} from "@/routes/Individual/FullRoutes/${target.sectionFolder}/${fileBase}";`;
    lines = ensureImportLine(lines, importLine);

    const patched = ensureSpreadInArrayBlock(lines.join('\n'), sectionVar, varName);
    lines = patched.split('\n');
  }

  const next = lines.join('\n');

  if (next === original) {
    skipped.push(outPath);
    return { wrote, skipped };
  }

  if (args.dryRun) {
    wrote.push(outPath);
    return { wrote, skipped };
  }

  const changed = writeIfChanged(outPath, next);
  if (changed) wrote.push(outPath);
  else skipped.push(outPath);

  return { wrote, skipped };
}