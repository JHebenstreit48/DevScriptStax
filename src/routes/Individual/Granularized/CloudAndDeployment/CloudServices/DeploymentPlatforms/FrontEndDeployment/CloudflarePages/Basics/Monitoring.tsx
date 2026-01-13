import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogsAndAnalytics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Monitoring/LogsAndAnalytics'));
const DebuggingDeploys = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Monitoring/DebuggingDeploys'));

const Monitoring: RouteObject[] = [
  {
    path: '/cloudflare-pages/basics/monitoring/logs-analytics',
    element: <LogsAndAnalytics />,
  },
  {
    path: '/cloudflare-pages/basics/monitoring/debugging-deploys',
    element: <DebuggingDeploys />,
  },
];

export default Monitoring;
