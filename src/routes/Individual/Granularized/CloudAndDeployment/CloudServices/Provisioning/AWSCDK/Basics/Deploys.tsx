import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SynthesizeAndDiff = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Deploys/SynthesizeAndDiff'));
const DeployAndDestroy = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Deploys/DeployAndDestroy'));

const Deploys: RouteObject[] = [
  {
    path: '/aws-cdk/basics/deploys/synthesize-diff',
    element: <SynthesizeAndDiff />,
  },
  {
    path: '/aws-cdk/basics/deploys/deploy-destroy',
    element: <DeployAndDestroy />,
  },
];

export default Deploys;
