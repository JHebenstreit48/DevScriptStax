import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClientCachingPatterns = lazy(() => import('@/pages/mainTabs/BackEnd/Stacks/MERN/Advanced/Performance/ClientCachingPatterns'));
const APIPaginationAndFilters = lazy(() => import('@/pages/mainTabs/BackEnd/Stacks/MERN/Advanced/Performance/APIPaginationAndFilters'));

const Performance: RouteObject[] = [
  {
    path: '/mern/advanced/performance/client-caching-patterns',
    element: <ClientCachingPatterns />,
  },
  {
    path: '/mern/advanced/performance/api-pagination-and-filters',
    element: <APIPaginationAndFilters />,
  },
];

export default Performance;
