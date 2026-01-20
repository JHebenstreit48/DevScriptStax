import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAccount = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Setup/CreateAccount'));
const ConnectRepoAndDeploy = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Setup/ConnectRepoAndDeploy'));

const Setup: RouteObject[] = [
  {
    path: '/cloudflare-pages/basics/setup/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/cloudflare-pages/basics/setup/connect-repo-deploy',
    element: <ConnectRepoAndDeploy />,
  },
];

export default Setup;
