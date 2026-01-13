import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DeployHooks = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Workflows/DeployHooks'));
const Monorepos = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Workflows/Monorepos'));

const Workflows: RouteObject[] = [
  {
    path: '/cloudflare-pages/advanced/workflows/deploy-hooks',
    element: <DeployHooks />,
  },
  {
    path: '/cloudflare-pages/advanced/workflows/monorepos',
    element: <Monorepos />,
  },
];

export default Workflows;
