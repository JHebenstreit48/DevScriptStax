import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OptimizingRepositories = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/PerformanceAndSecurity/OptimizingRepositories'));
const SecurityBestPractices = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/PerformanceAndSecurity/SecurityBestPractices'));

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
