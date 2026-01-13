import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Observability/LogsAndMetrics'));
const TracesAndErrors = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Observability/TracesAndErrors'));

const Observability: RouteObject[] = [
  {
    path: '/cloudflare-workers/basics/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/cloudflare-workers/basics/observability/traces-errors',
    element: <TracesAndErrors />,
  },
];

export default Observability;
