import { useEffect, useState } from 'react';
import type { SearchMatch } from '@/types/navigation';
import { getSearchIndex } from '@/utils/navigation/search/searchIndex';

export function useSearchIndex(active: boolean) {
  const [allPages, setAllPages] = useState<SearchMatch[] | null>(null);

  useEffect(() => {
    if (!active || allPages) return;

    let cancelled = false;

    getSearchIndex()
      .then((index) => {
        if (!cancelled) setAllPages(index);
      })
      .catch((err) => {
        console.error('[useSearchIndex] failed:', err);
      });

    return () => {
      cancelled = true;
    };
  }, [active, allPages]);

  return allPages;
}