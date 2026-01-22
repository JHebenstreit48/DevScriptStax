import pages from '@/domain/navigation/mainTabs';
import { flattenNavigation } from '@/Components/NavigationUI/Search/Utils/flattenNavigation';
import type { SearchMatch } from '@/Components/NavigationUI/Search/Utils/types';

let cached: SearchMatch[] | null = null;

export function getSearchIndex(): SearchMatch[] {
  if (cached) return cached;
  cached = flattenNavigation(pages);
  return cached;
}