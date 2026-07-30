const routeFiles = import.meta.glob('/src/routes/individual/modularized/**/*.tsx', {
  as: 'raw',
  eager: true,
}) as Record<string, string>;

const pageFiles = import.meta.glob('/src/pages/mainTabs/**/*.tsx', {
  as: 'raw',
  eager: true,
}) as Record<string, string>;

function resolveImportToFile(importPath: string): string | null {
  const rel = importPath.replace(/^@\//, '/src/');
  const full = `${rel}.tsx`;
  return pageFiles[full] ? full : null;
}

function extractFilePathConst(source: string): string | null {
  const match = source.match(/const\s+\w*[Ff]ilePath\w*\s*=\s*['"]([^'"]+)['"]/);
  return match ? match[1] : null;
}

function buildRegistry(): Record<string, string> {
  const map: Record<string, string> = {};

  for (const routeSource of Object.values(routeFiles)) {
    const importMap: Record<string, string> = {};
    for (const m of routeSource.matchAll(
      /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\)/g
    )) {
      importMap[m[1]] = m[2];
    }

    for (const m of routeSource.matchAll(
      /path:\s*['"]([^'"]+)['"]\s*,\s*element:\s*<(\w+)/g
    )) {
      const [, routePath, componentName] = m;
      const importPath = importMap[componentName];
      if (!importPath) continue;

      const pageFile = resolveImportToFile(importPath);
      if (!pageFile) continue;

      const filePath = extractFilePathConst(pageFiles[pageFile]);
      if (filePath) map[routePath] = filePath;
    }
  }

  return map;
}

let cached: Record<string, string> | null = null;

export function getFilePathRegistry(): Record<string, string> {
  if (!cached) cached = buildRegistry();
  return cached;
}