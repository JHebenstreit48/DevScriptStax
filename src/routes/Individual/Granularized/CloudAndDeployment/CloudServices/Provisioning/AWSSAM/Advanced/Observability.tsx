import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TracingAndLogs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Observability/TracingAndLogs'));
const Alarms = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Observability/Alarms'));

const Observability: RouteObject[] = [
  {
    path: '/aws-sam/advanced/observability/tracing-logs',
    element: <TracingAndLogs />,
  },
  {
    path: '/aws-sam/advanced/observability/alarms',
    element: <Alarms />,
  },
];

export default Observability;
