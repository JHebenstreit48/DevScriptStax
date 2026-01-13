import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Observability/LogsAndMetrics'));
const XRayTracing = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Observability/XRayTracing'));

const Observability: RouteObject[] = [
  {
    path: '/aws-lambda/basics/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/aws-lambda/basics/observability/xray-tracing',
    element: <XRayTracing />,
  },
];

export default Observability;
