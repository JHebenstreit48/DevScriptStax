import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DeployContexts = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/WorkflowsAndCI/DeployContexts'));
const Monorepos = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/WorkflowsAndCI/Monorepos'));

const WorkflowsAndCI: RouteObject[] = [
  {
    path: '/netlify/advanced/workflows-ci/deploy-contexts',
    element: <DeployContexts />,
  },
  {
    path: '/netlify/advanced/workflows-ci/monorepos',
    element: <Monorepos />,
  },
];

export default WorkflowsAndCI;
