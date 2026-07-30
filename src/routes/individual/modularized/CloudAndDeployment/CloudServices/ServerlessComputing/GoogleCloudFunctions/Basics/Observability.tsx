import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Observability/LogsAndMetrics'));
const ErrorReportingAndTraces = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Observability/ErrorReportingAndTraces'));

const Observability: RouteObject[] = [
  {
    path: '/google-cloud-functions/basics/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/google-cloud-functions/basics/observability/error-traces',
    element: <ErrorReportingAndTraces />,
  },
];

export default Observability;
