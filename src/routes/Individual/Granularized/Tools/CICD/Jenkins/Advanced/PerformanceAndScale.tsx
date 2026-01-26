import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerformanceOptimization = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Advanced/PerformanceAndScale/PerformanceOptimization'));
const CachingAndArtifacts = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Advanced/PerformanceAndScale/CachingAndArtifacts'));

const PerformanceAndScale: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/advanced/perf-scale/performance',
    element: <PerformanceOptimization />,
  },
  {
    path: '/ci-cd/jenkins/advanced/perf-scale/caching-artifacts',
    element: <CachingAndArtifacts />,
  },
];

export default PerformanceAndScale;
