import path from 'node:path';
import fs from 'node:fs';

export function scanRoutesSectionGeneratedFile(sectionFolder: string): string {
  const fileBase = sectionFolder.charAt(0).toLowerCase() + sectionFolder.slice(1);
  return path.join(process.cwd(), 'src', 'routes', 'Sections', `${fileBase}.generated.tsx`);
}

export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

export function dirExists(dirPath: string): boolean {
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

/**
 * Count only .tsx files directly inside a folder (not recursive).
 */
export function countTsxFilesInDir(dirPath: string): number {
  if (!dirExists(dirPath)) return 0;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let count = 0;
  for (const e of entries) {
    if (!e.isFile()) continue;
    if (e.name.toLowerCase().endsWith('.tsx')) count++;
  }
  return count;
}

// -----------------------------------------------------------------------------
// Pages: stems-based sibling match (deep-nesting safe)
// -----------------------------------------------------------------------------

function listTsxStemsInDir(dirPath: string): Set<string> {
  const stems = new Set<string>();
  if (!dirExists(dirPath)) return stems;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const e of entries) {
    if (!e.isFile()) continue;
    if (!e.name.toLowerCase().endsWith('.tsx')) continue;
    const stem = e.name.slice(0, -4); // remove ".tsx"
    stems.add(stem);
  }

  return stems;
}

function setsEqual(a: Set<string>, b: Set<string>): boolean {
  if (a.size !== b.size) return false;
  for (const x of a) if (!b.has(x)) return false;
  return true;
}

/**
 * Given a parent directory, find a sibling directory whose .tsx file STEMS
 * exactly match the expected stems.
 *
 * This replaces the old count-only sibling match, which breaks when many groups
 * have the same # of leaf pages (e.g., lots of 2-page groups).
 */
export function findSiblingDirWithSameTsxStems(parentDir: string, expectedStems: Set<string>): string | null {
  if (!dirExists(parentDir)) return null;
  if (!expectedStems || expectedStems.size === 0) return null;

  const entries = fs.readdirSync(parentDir, { withFileTypes: true });
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const full = path.join(parentDir, e.name);
    const stems = listTsxStemsInDir(full);
    if (stems.size === 0) continue;
    if (setsEqual(stems, expectedStems)) return full;
  }

  return null;
}

// -----------------------------------------------------------------------------
// Leaf route signature de-dupe (used by routesLeaf.ts)
// -----------------------------------------------------------------------------

function walk(dir: string, out: string[] = []): string[] {
  if (!dirExists(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// matches: path: '/something'
const ROUTE_PATH_RE = /^\s*path:\s*['"]([^'"]+)['"]\s*,?\s*$/gm;

export function computeLeafRouteSignatureFromPaths(routePaths: string[]): string {
  const uniq = Array.from(new Set(routePaths)).sort();
  return uniq.join('|');
}

function signatureFromRouteFile(content: string): string | null {
  const paths: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = ROUTE_PATH_RE.exec(content)) !== null) {
    paths.push(m[1]);
  }
  if (paths.length === 0) return null;
  return computeLeafRouteSignatureFromPaths(paths);
}

let cachedLeafRouteSigIndex: Map<string, string> | null = null;

export function getLeafRouteSignatureIndex(routesRootAbs: string): Map<string, string> {
  if (cachedLeafRouteSigIndex) return cachedLeafRouteSigIndex;

  const idx = new Map<string, string>();
  for (const f of walk(routesRootAbs)) {
    if (!f.endsWith('.tsx') && !f.endsWith('.ts')) continue;
    const text = fs.readFileSync(f, 'utf8');
    const sig = signatureFromRouteFile(text);
    if (!sig) continue;
    if (!idx.has(sig)) idx.set(sig, f);
  }

  cachedLeafRouteSigIndex = idx;
  return idx;
}

export function resetScanCaches() {
  cachedLeafRouteSigIndex = null;
}