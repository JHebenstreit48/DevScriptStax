import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MemoryMgmt = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/PerformanceAndMemory/MemoryMgmt'));
const Optimization = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/PerformanceAndMemory/Optimization'));

const PerformanceAndMemory: RouteObject[] = [
  {
    path: '/go/advanced/performance/memory',
    element: <MemoryMgmt />,
  },
  {
    path: '/go/advanced/performance/optimization',
    element: <Optimization />,
  },
];

export default PerformanceAndMemory;
