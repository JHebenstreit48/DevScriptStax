import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAccountAndDeploy = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Setup/CreateAccountAndDeploy'));
const CustomDomainAndHTTPS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Setup/CustomDomainAndHTTPS'));

const Setup: RouteObject[] = [
  {
    path: '/cloud-services/deployment/front-end/netlify/basics/setup/account-and-first-deploy',
    element: <CreateAccountAndDeploy />,
  },
  {
    path: '/cloud-services/deployment/front-end/netlify/basics/setup/custom-domain-https',
    element: <CustomDomainAndHTTPS />,
  },
];

export default Setup;
