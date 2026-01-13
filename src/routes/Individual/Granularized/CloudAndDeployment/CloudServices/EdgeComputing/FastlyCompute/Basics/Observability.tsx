import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Observability/LogsAndMetrics'));
const RealTimeAnalytics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Observability/RealTimeAnalytics'));

const Observability: RouteObject[] = [
  {
    path: '/fastly-compute/basics/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/fastly-compute/basics/observability/real-time-analytics',
    element: <RealTimeAnalytics />,
  },
];

export default Observability;
