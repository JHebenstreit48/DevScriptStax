import pages from '@/domain/navigation/mainTabs';
import { flattenNavigation } from '@/utils/navigation/search/flattenNavigation';
import { fetchAllNotesBodies } from '@/utils/notes/fetchAllNotesBodies';
import { stripMarkdown } from '@/utils/navigation/search/stripMarkdown';
import type { SearchMatch } from '@/types/navigation';

let cachedPromise: Promise<SearchMatch[]> | null = null;

function normalize(path: string): string {
  return path
    .toLowerCase()
    .replace(/^\//, '')
    .replace(/\.md$/i, '')
    .split('/')
    .map((seg) => seg.replace(/[^a-z0-9]/g, ''))
    .join('/');
}

async function buildIndex(): Promise<SearchMatch[]> {
  const base = flattenNavigation(pages);

  let bodies: { fullPath: string; bodyMd: string }[] = [];
  try {
    bodies = await fetchAllNotesBodies();
  } catch (err) {
    console.error('Failed to fetch note bodies, falling back to nav-only search:', err);
  }

  return base.map((page) => {
    const normalizedRoute = normalize(page.path);
    const match = bodies.find((b) => normalize(b.fullPath).endsWith(normalizedRoute));
    return match ? { ...page, content: stripMarkdown(match.bodyMd) } : page;
  });
}

export function getSearchIndex(): Promise<SearchMatch[]> {
  if (!cachedPromise) {
    cachedPromise = buildIndex();
  }
  return cachedPromise;
}