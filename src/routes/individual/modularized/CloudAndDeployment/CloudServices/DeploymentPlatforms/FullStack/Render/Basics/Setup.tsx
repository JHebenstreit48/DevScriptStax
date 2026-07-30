import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AccountSetupAndFirstDeployment = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/AccountAndFirstDeployment'));
const CustomDomain = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/CustomDomain'));
const CLI = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/CLI'));

const Setup: RouteObject[] = [
  {
    path: '/render/basics/setup/account-and-first-deployment',
    element: <AccountSetupAndFirstDeployment />,
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