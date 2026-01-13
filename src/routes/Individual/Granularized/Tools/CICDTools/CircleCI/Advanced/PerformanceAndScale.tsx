import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CachingAndPerformanceTuning = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Advanced/PerformanceAndScale/CachingAndPerformanceTuning'));
const ParallelismAndTestSplitting = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Advanced/PerformanceAndScale/ParallelismAndTestSplitting'));
const OptimizingCICDWorkflows = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/CircleCI/Advanced/PerformanceAndScale/OptimizingCICDWorkflows'));

const PerformanceAndScale: RouteObject[] = [
  {
    path: '/tools/cicd/circleci/advanced/performance-and-scale/caching',
    element: <CachingAndPerformanceTuning />,
  },
  {
    path: '/tools/cicd/circleci/advanced/performance-and-scale/parallelism',
    element: <ParallelismAndTestSplitting />,
  },
  {
    path: '/tools/cicd/circleci/advanced/performance-and-scale/optimization',
    element: <OptimizingCICDWorkflows />,
  },
];

export default PerformanceAndScale;
