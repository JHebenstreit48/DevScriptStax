import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Observability/LogsAndMetrics'));
const Debugging = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Observability/Debugging'));
const AlertsAndNotifications = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Observability/AlertsAndNotifications'));

const Observability: RouteObject[] = [
  {
    path: '/render/advanced/observability/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/render/advanced/observability/debugging',
    element: <Debugging />,
  },
  {
    path: '/render/advanced/observability/alerts',
    element: <AlertsAndNotifications />,
  },
];

export default Observability;
