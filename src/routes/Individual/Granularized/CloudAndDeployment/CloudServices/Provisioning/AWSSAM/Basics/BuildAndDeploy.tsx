import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildAndPackage = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/BuildAndDeploy/BuildAndPackage'));
const DeployAndStacks = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/BuildAndDeploy/DeployAndStacks'));

const BuildAndDeploy: RouteObject[] = [
  {
    path: '/aws-sam/basics/build-deploy/build-package',
    element: <BuildAndPackage />,
  },
  {
    path: '/aws-sam/basics/build-deploy/deploy-stacks',
    element: <DeployAndStacks />,
  },
];

export default BuildAndDeploy;
