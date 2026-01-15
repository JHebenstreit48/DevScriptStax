import { useLocation } from 'react-router-dom';
import { resolveBreadcrumbTrail } from '@/domain/navigation/breadcrumbs';

export function useBreadcrumbTrail(): string[] {
  const { pathname } = useLocation();
  return resolveBreadcrumbTrail(pathname);
}