import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerformanceOptimization = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/Performance/PerformanceOptimization'));
const CachingAndIncrementalBuilds = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/Performance/CachingAndIncrementalBuilds'));

const Performance: RouteObject[] = [
  {
    path: '/gatsby/advanced/performance/performance-optimization',
    element: <PerformanceOptimization />,
  },
  {
    path: '/gatsby/advanced/performance/caching-and-incremental-builds',
    element: <CachingAndIncrementalBuilds />,
  },
];

export default Performance;
