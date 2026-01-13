import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ParallelTestExecution = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/TestOptimization/ParallelTestExecution'));
const PerformanceTestingWithCypress = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/TestOptimization/PerformanceTestingWithCypress'));
const BestPracticesInCypress = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/TestOptimization/BestPracticesInCypress'));

const TestOptimization: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/parallel-execution',
    element: <ParallelTestExecution />,
  },
  {
    path: '/testing/e2e/cypress/performance',
    element: <PerformanceTestingWithCypress />,
  },
  {
    path: '/testing/e2e/cypress/best-practices',
    element: <BestPracticesInCypress />,
  },
];

export default TestOptimization;
