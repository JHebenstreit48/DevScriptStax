import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Monitoring/LogsAndMetrics'));
const Troubleshooting = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Monitoring/Troubleshooting'));

const Monitoring: RouteObject[] = [
  {
    path: '/fly/basics/monitoring/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/fly/basics/monitoring/troubleshooting',
    element: <Troubleshooting />,
  },
];

export default Monitoring;
