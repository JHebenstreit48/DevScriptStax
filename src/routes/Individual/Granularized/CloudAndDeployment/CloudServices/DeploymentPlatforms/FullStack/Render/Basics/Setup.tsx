import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Account = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/Account'));
const FirstDeployment = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/FirstDeployment'));
const CustomDomain = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/CustomDomain'));
const CLI = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/CLI'));

const Setup: RouteObject[] = [
  {
    path: '/render/basics/setup/account',
    element: <Account />,
  },
  {
    path: '/render/basics/setup/first-deployment',
    element: <FirstDeployment />,
  },
  {
    path: '/render/basics/setup/custom-domain',
    element: <CustomDomain />,
  },
  {
    path: '/render/basics/setup/cli',
    element: <CLI />,
  },
];

export default Setup;
