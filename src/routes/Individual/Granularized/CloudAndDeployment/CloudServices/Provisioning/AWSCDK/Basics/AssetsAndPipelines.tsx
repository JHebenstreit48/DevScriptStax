import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AssetsAndBundling = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/AssetsAndPipelines/AssetsAndBundling'));
const CICDPipelines = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/AssetsAndPipelines/CICDPipelines'));

const AssetsAndPipelines: RouteObject[] = [
  {
    path: '/aws-cdk/basics/assets-pipelines/assets-bundling',
    element: <AssetsAndBundling />,
  },
  {
    path: '/aws-cdk/basics/assets-pipelines/ci-cd-pipelines',
    element: <CICDPipelines />,
  },
];

export default AssetsAndPipelines;
