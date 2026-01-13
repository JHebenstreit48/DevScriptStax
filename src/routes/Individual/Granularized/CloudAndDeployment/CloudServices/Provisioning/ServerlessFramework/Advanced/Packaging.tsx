import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Layers = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Packaging/Layers'));
const CustomBuild = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Packaging/CustomBuild'));

const Packaging: RouteObject[] = [
  {
    path: '/serverless-framework/advanced/packaging/layers',
    element: <Layers />,
  },
  {
    path: '/serverless-framework/advanced/packaging/custom-build',
    element: <CustomBuild />,
  },
];

export default Packaging;
