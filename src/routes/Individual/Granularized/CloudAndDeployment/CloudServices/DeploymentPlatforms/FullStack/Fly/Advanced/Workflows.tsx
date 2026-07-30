import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BlueGreenDeploys = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Workflows/BlueGreenDeploys'));
const Monorepos = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Workflows/Monorepos'));

const Workflows: RouteObject[] = [
  {
    path: '/fly/advanced/workflows/blue-green-deploys',
    element: <BlueGreenDeploys />,
  },
  {
    path: '/fly/advanced/workflows/monorepos',
    element: <Monorepos />,
  },
];

export default Workflows;
