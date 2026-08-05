import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OptimizingRepositories = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/Containerization/Git/Advanced/PerformanceAndSecurity/OptimizingRepositories'));
const SecurityBestPractices = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/Containerization/Git/Advanced/PerformanceAndSecurity/SecurityBestPractices'));

const PerformanceAndSecurity: RouteObject[] = [
  {
    path: '/git/advanced/performance/optimizing',
    element: <OptimizingRepositories />,
  },
  {
    path: '/git/advanced/security/best-practices',
    element: <SecurityBestPractices />,
  },
];

export default PerformanceAndSecurity;
