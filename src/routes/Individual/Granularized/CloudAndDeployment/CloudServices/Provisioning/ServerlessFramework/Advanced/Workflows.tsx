import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CICD = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Workflows/CICD'));
const Monorepos = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Workflows/Monorepos'));

const Workflows: RouteObject[] = [
  {
    path: '/serverless-framework/advanced/workflows/ci-cd',
    element: <CICD />,
  },
  {
    path: '/serverless-framework/advanced/workflows/monorepos',
    element: <Monorepos />,
  },
];

export default Workflows;
