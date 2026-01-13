import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ZipAndLayers = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/PackagingAndDeploy/ZipAndLayers'));
const ContainerImages = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/PackagingAndDeploy/ContainerImages'));

const PackagingAndDeploy: RouteObject[] = [
  {
    path: '/aws-lambda/basics/packaging-deploy/zip-layers',
    element: <ZipAndLayers />,
  },
  {
    path: '/aws-lambda/basics/packaging-deploy/container-images',
    element: <ContainerImages />,
  },
];

export default PackagingAndDeploy;
