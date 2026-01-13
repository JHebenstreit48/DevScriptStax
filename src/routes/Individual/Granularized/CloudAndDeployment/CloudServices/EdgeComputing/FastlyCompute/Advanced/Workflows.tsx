import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CICD = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Workflows/CICD'));
const CanaryAndAB = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Workflows/CanaryAndAB'));

const Workflows: RouteObject[] = [
  {
    path: '/fastly-compute/advanced/workflows/ci-cd',
    element: <CICD />,
  },
  {
    path: '/fastly-compute/advanced/workflows/canary-ab',
    element: <CanaryAndAB />,
  },
];

export default Workflows;
