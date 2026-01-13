import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CICDPipelines = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Pipelines/CICDPipelines'));
const MultiAccount = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Pipelines/MultiAccount'));

const Pipelines: RouteObject[] = [
  {
    path: '/aws-sam/advanced/pipelines/ci-cd-pipelines',
    element: <CICDPipelines />,
  },
  {
    path: '/aws-sam/advanced/pipelines/multi-account',
    element: <MultiAccount />,
  },
];

export default Pipelines;
