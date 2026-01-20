import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DeployHooks = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced/Workflows/DeployHooks'));
const GitIntegrations = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced/Workflows/GitIntegrations'));

const Workflows: RouteObject[] = [
  {
    path: '/vercel/advanced/workflows/deploy-hooks',
    element: <DeployHooks />,
  },
  {
    path: '/vercel/advanced/workflows/git-integrations',
    element: <GitIntegrations />,
  },
];

export default Workflows;
