import pages from '@/domain/navigation/mainTabs';
import { flattenNavigation } from '@/components/navigationUI/search/utils/flattenNavigation';
import type { SearchMatch } from '@/components/navigationUI/search/utils/types';

let cached: SearchMatch[] | null = null;

export function getSearchIndex(): SearchMatch[] {
  if (cached) return cached;
  cached = flattenNavigation(pages);
  return cached;
}