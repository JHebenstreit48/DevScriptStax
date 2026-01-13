import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAccount = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Setup/CreateAccount'));
const ConnectRepoAndDeploy = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Setup/ConnectRepoAndDeploy'));

const Setup: RouteObject[] = [
  {
    path: '/vercel/basics/setup/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/vercel/basics/setup/connect-repo-deploy',
    element: <ConnectRepoAndDeploy />,
  },
];

export default Setup;
