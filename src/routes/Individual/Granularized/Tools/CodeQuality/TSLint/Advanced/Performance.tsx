import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LargeProjects = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Advanced/Performance/LargeProjects'));
const CachingAndSpeed = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Advanced/Performance/CachingAndSpeed'));

const Performance: RouteObject[] = [
  {
    path: '/tslint/advanced/performance/large-projects',
    element: <LargeProjects />,
  },
  {
    path: '/tslint/advanced/performance/caching-speed',
    element: <CachingAndSpeed />,
  },
];

export default Performance;
