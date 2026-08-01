import pages from '@/domain/navigation/mainTabs';
import { flattenNavigation } from '@/utils/navigation/search/flattenNavigation';
import { fetchAllNotesBodies } from '@/utils/notes/fetchAllNotesBodies';
import { stripMarkdown } from '@/utils/navigation/search/stripMarkdown';
import { getFilePathRegistry } from '@/utils/navigation/search/filePathRegistry';
import type { SearchMatch } from '@/types/navigation';

let cachedPromise: Promise<SearchMatch[]> | null = null;

function toFullPath(filePath: string): string {
  let fp = filePath.replace(/\\/g, '/');
  if (fp.toLowerCase().endsWith('.md')) fp = fp.slice(0, -3);
  if (fp.startsWith('/')) fp = fp.slice(1);
  return fp;
}

function normalizeRoute(path: string): string {
  return path
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.md$/i, '')
    .split('/')
    .map((seg) => seg.replace(/[^a-z0-9]/g, ''))
    .join('/');
}

async function buildIndex(): Promise<SearchMatch[]> {
  const base = flattenNavigation(pages);
  const registry = getFilePathRegistry();

  let bodies: { fullPath: string; bodyMd: string }[] = [];
  try {
    bodies = await fetchAllNotesBodies();
  } catch (err) {
    console.error('Failed to fetch note bodies, falling back to nav-only search:', err);
  }

  const bodyByExactPath = new Map(bodies.map((b) => [toFullPath(b.fullPath), b.bodyMd]));

  return base.map((page) => {
    const registryFilePath = registry[page.path];
    if (registryFilePath) {
      const bodyMd = bodyByExactPath.get(toFullPath(registryFilePath));
      if (bodyMd) return { ...page, content: stripMarkdown(bodyMd) };
    }

    const normalizedRoute = normalizeRoute(page.path);
    const fallbackMatch = bodies.find((b) => normalizeRoute(b.fullPath).endsWith(normalizedRoute));
    if (fallbackMatch) return { ...page, content: stripMarkdown(fallbackMatch.bodyMd) };

    return page;
  });
}

export function getSearchIndex(): Promise<SearchMatch[]> {
  if (!cachedPromise) {
    cachedPromise = buildIndex();
  }
  return cachedPromise;
}