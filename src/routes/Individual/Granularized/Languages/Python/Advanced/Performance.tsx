import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Optimization = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Performance/Optimization'));
const Profiling = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Performance/Profiling'));
const MemoryManagement = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Performance/MemoryManagement'));

const Performance: RouteObject[] = [
  {
    path: '/python/advanced/performance/optimization',
    element: <Optimization />,
  },
  {
    path: '/python/advanced/performance/profiling',
    element: <Profiling />,
  },
  {
    path: '/python/advanced/performance/memory',
    element: <MemoryManagement />,
  },
];

export default Performance;
