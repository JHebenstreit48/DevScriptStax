import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StaticSitesAndWebServices = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/StaticSitesAndWebServices'));
const BackgroundWorkersAndCron = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/BackgroundWorkersAndCron'));

const Services: RouteObject[] = [
  {
    path: '/render/basics/services/static-sites-and-web-services',
    element: <StaticSitesAndWebServices />,
  },
  {
    path: '/render/basics/services/workers-and-cron-jobs',
    element: <BackgroundWorkersAndCron />,
  },
];

export default Services;