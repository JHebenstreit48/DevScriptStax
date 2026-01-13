import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndMetrics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Monitoring/LogsAndMetrics'));
const DebuggingDeploys = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Monitoring/DebuggingDeploys'));

const Monitoring: RouteObject[] = [
  {
    path: '/netlify/basics/monitoring/logs-metrics',
    element: <LogsAndMetrics />,
  },
  {
    path: '/netlify/basics/monitoring/debugging-deploys',
    element: <DebuggingDeploys />,
  },
];

export default Monitoring;
