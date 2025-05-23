import { useLocation } from 'react-router-dom';
import { resolveBreadcrumbTrail } from '@/Navigation/CombinedNav/CombinedNavAndTypes/resolveBreadCrumbTrail';

export function useBreadcrumbTrail(): string[] {
  const { pathname } = useLocation();
  return resolveBreadcrumbTrail(pathname);
}
