import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DeployTriggers = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Workflows/DeployTriggers'));
const Monorepos = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Workflows/Monorepos'));

const Workflows: RouteObject[] = [
  {
    path: '/railway/advanced/workflows/deploy-triggers',
    element: <DeployTriggers />,
  },
  {
    path: '/railway/advanced/workflows/monorepos',
    element: <Monorepos />,
  },
];

export default Workflows;
