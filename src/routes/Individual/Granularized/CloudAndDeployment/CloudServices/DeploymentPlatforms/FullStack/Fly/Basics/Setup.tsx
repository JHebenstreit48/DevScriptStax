import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallFlyctl = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Setup/InstallFlyctl'));
const LaunchApp = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Setup/LaunchApp'));

const Setup: RouteObject[] = [
  {
    path: '/fly/basics/setup/install-flyctl',
    element: <InstallFlyctl />,
  },
  {
    path: '/fly/basics/setup/launch-app',
    element: <LaunchApp />,
  },
];

export default Setup;
