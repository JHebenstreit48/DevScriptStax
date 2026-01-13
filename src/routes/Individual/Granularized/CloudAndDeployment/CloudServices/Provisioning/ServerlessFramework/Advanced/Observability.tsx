import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Observability/LogsAndMetrics'));
const Tracing = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Observability/Tracing'));

const Observability: RouteObject[] = [
  {
    path: '/serverless-framework/advanced/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/serverless-framework/advanced/observability/tracing',
    element: <Tracing />,
  },
];

export default Observability;
