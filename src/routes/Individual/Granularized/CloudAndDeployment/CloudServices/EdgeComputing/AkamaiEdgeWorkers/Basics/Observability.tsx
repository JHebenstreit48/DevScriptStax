import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Observability/LogsAndMetrics'));
const DebuggingAndValidation = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Observability/DebuggingAndValidation'));

const Observability: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/basics/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/akamai-edgeworkers/basics/observability/debugging-validation',
    element: <DebuggingAndValidation />,
  },
];

export default Observability;
