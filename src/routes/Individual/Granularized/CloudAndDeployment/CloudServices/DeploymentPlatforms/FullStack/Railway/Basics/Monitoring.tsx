import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Monitoring/LogsAndMetrics'));
const DebuggingDeploys = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Monitoring/DebuggingDeploys'));

const Monitoring: RouteObject[] = [
  {
    path: '/railway/basics/monitoring/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/railway/basics/monitoring/debugging-deploys',
    element: <DebuggingDeploys />,
  },
];

export default Monitoring;
