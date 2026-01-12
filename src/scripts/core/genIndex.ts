import fs from "node:fs";
import path from "node:path";

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

const indexDir = path.join(process.cwd(), ".gen-index");
const pagesIndexPath = path.join(indexDir, "pages.json");

export type PagesIndex = Record<string, string>; // urlPath -> absolute pageFsPath

export function loadPagesIndex(): PagesIndex {
  try {
    const raw = fs.readFileSync(pagesIndexPath, "utf8");
    return JSON.parse(raw) as PagesIndex;
  } catch {
    return {};
  }
}

export function savePagesIndex(idx: PagesIndex) {
  ensureDir(indexDir);
  fs.writeFileSync(pagesIndexPath, JSON.stringify(idx, null, 2), "utf8");
}