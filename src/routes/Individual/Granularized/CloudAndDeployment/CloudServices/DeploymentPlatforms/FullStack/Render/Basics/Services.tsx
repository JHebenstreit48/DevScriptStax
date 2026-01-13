import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StaticSites = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/StaticSites'));
const WebServices = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/WebServices'));
const BackgroundWorkers = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/BackgroundWorkers'));
const CronJobs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/CronJobs'));

const Services: RouteObject[] = [
  {
    path: '/render/basics/services/static-sites',
    element: <StaticSites />,
  },
  {
    path: '/render/basics/services/web-services',
    element: <WebServices />,
  },
  {
    path: '/render/basics/services/background-workers',
    element: <BackgroundWorkers />,
  },
  {
    path: '/render/basics/services/cron-jobs',
    element: <CronJobs />,
  },
];

export default Services;
