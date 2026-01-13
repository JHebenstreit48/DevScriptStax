import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PackageAndDeploy = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Deploys/PackageAndDeploy'));
const RemoveAndRollback = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Deploys/RemoveAndRollback'));

const Deploys: RouteObject[] = [
  {
    path: '/serverless-framework/basics/deploys/package-deploy',
    element: <PackageAndDeploy />,
  },
  {
    path: '/serverless-framework/basics/deploys/remove-rollback',
    element: <RemoveAndRollback />,
  },
];

export default Deploys;
