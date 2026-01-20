import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndAnalytics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Monitoring/LogsAndAnalytics'));
const DebuggingDeploys = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Monitoring/DebuggingDeploys'));

const Monitoring: RouteObject[] = [
  {
    path: '/vercel/basics/monitoring/logs-analytics',
    element: <LogsAndAnalytics />,
  },
  {
    path: '/vercel/basics/monitoring/debugging-deploys',
    element: <DebuggingDeploys />,
  },
];

export default Monitoring;
