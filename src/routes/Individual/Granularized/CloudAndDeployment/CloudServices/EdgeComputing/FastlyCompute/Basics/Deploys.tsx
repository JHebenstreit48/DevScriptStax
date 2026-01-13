import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildAndDeploy = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Deploys/BuildAndDeploy'));
const VersionsAndActivations = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Deploys/VersionsAndActivations'));

const Deploys: RouteObject[] = [
  {
    path: '/fastly-compute/basics/deploys/build-deploy',
    element: <BuildAndDeploy />,
  },
  {
    path: '/fastly-compute/basics/deploys/versions-activations',
    element: <VersionsAndActivations />,
  },
];

export default Deploys;
