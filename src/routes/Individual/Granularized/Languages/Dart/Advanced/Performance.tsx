import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DevTools = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/Performance/DevTools'));
const MemoryAndGC = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/Performance/MemoryAndGC'));

const Performance: RouteObject[] = [
  {
    path: '/dart/advanced/perf/devtools',
    element: <DevTools />,
  },
  {
    path: '/dart/advanced/perf/memory-gc',
    element: <MemoryAndGC />,
  },
];

export default Performance;
