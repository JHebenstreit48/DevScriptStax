import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LargeRepos = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Advanced/Performance/LargeRepos'));
const CachingAndSpeed = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Advanced/Performance/CachingAndSpeed'));

const Performance: RouteObject[] = [
  {
    path: '/standardjs/advanced/performance/large-repos',
    element: <LargeRepos />,
  },
  {
    path: '/standardjs/advanced/performance/caching-speed',
    element: <CachingAndSpeed />,
  },
];

export default Performance;
