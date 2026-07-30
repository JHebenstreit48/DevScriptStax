import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerformanceOptimization = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Advanced/PerformanceAndScalability/PerformanceOptimization'));
const MemoryManagement = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Advanced/PerformanceAndScalability/MemoryManagement'));
const ScalabilityPrinciples = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Advanced/PerformanceAndScalability/ScalabilityPrinciples'));

const PerformanceAndScalability: RouteObject[] = [
  {
    path: '/javascript/advanced/performance-and-scalability/performance-optimization',
    element: <PerformanceOptimization />,
  },
  {
    path: '/javascript/advanced/performance-and-scalability/memory-management',
    element: <MemoryManagement />,
  },
  {
    path: '/javascript/advanced/performance-and-scalability/scalability',
    element: <ScalabilityPrinciples />,
  },
];

export default PerformanceAndScalability;
