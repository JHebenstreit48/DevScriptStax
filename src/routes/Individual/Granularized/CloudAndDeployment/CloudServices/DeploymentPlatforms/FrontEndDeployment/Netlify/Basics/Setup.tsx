import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAccount = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Setup/CreateAccount'));
const ConnectRepoAndDeploy = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Setup/ConnectRepoAndDeploy'));
const CustomDomainAndHTTPS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Setup/CustomDomainAndHTTPS'));

const Setup: RouteObject[] = [
  {
    path: '/netlify/basics/setup/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/netlify/basics/setup/connect-repo-deploy',
    element: <ConnectRepoAndDeploy />,
  },
  {
    path: '/netlify/basics/setup/custom-domain-https',
    element: <CustomDomainAndHTTPS />,
  },
];

export default Setup;
