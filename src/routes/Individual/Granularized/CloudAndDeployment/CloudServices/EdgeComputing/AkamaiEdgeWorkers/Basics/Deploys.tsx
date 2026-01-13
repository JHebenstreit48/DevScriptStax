import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BundlesAndActivation = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Deploys/BundlesAndActivation'));
const SandboxAndStaging = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Deploys/SandboxAndStaging'));

const Deploys: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/basics/deploys/bundles-activation',
    element: <BundlesAndActivation />,
  },
  {
    path: '/akamai-edgeworkers/basics/deploys/sandbox-staging',
    element: <SandboxAndStaging />,
  },
];

export default Deploys;
