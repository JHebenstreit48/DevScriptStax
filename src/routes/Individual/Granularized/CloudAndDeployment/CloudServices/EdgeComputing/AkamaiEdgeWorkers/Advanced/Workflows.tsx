import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CICDAndCLI = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Workflows/CICDAndCLI'));
const CanaryAndAB = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Workflows/CanaryAndAB'));

const Workflows: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/advanced/workflows/ci-cd-cli',
    element: <CICDAndCLI />,
  },
  {
    path: '/akamai-edgeworkers/advanced/workflows/canary-ab',
    element: <CanaryAndAB />,
  },
];

export default Workflows;
