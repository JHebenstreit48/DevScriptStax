import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CachingAndPerformanceTuning = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/PerformanceAndScale/CachingAndPerformanceTuning'));
const ParallelismAndTestSplitting = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/PerformanceAndScale/ParallelismAndTestSplitting'));
const OptimizingCICDWorkflows = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/PerformanceAndScale/OptimizingCICDWorkflows'));

const PerformanceAndScale: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/advanced/performance-and-scale/caching',
    element: <CachingAndPerformanceTuning />,
  },
  {
    path: '/ci-cd/circle-ci/advanced/performance-and-scale/parallelism',
    element: <ParallelismAndTestSplitting />,
  },
  {
    path: '/ci-cd/circle-ci/advanced/performance-and-scale/optimization',
    element: <OptimizingCICDWorkflows />,
  },
];

export default PerformanceAndScale;
