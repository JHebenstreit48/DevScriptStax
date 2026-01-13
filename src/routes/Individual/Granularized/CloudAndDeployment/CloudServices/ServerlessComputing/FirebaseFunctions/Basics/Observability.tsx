import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Observability/LogsAndMetrics'));
const ErrorReporting = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Observability/ErrorReporting'));

const Observability: RouteObject[] = [
  {
    path: '/firebase-functions/basics/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/firebase-functions/basics/observability/error-reporting',
    element: <ErrorReporting />,
  },
];

export default Observability;
