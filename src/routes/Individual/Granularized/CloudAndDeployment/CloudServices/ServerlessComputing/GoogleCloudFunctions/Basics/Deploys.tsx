import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SourceAndBuild = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Deploys/SourceAndBuild'));
const RegionsAndScaling = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Deploys/RegionsAndScaling'));

const Deploys: RouteObject[] = [
  {
    path: '/google-cloud-functions/basics/deploys/source-build',
    element: <SourceAndBuild />,
  },
  {
    path: '/google-cloud-functions/basics/deploys/regions-scaling',
    element: <RegionsAndScaling />,
  },
];

export default Deploys;
