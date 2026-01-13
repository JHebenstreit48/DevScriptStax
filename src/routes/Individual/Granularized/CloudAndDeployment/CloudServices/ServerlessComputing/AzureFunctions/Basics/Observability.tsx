import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Observability/LogsAndMetrics'));
const AppInsightsAndTraces = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Observability/AppInsightsAndTraces'));

const Observability: RouteObject[] = [
  {
    path: '/azure-functions/basics/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/azure-functions/basics/observability/app-insights-traces',
    element: <AppInsightsAndTraces />,
  },
];

export default Observability;
