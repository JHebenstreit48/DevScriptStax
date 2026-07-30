import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TracingAndLogs = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Observability/TracingAndLogs'));
const Alarms = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Observability/Alarms'));

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
