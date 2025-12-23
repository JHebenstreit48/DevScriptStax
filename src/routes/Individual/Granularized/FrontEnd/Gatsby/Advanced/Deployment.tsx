import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HostingOptions = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/Deployment/HostingOptions'));
const BuildAndDeploy = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/Deployment/BuildAndDeploy'));
const PreviewAndEnvVars = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/Deployment/PreviewAndEnvVars'));

const Deployment: RouteObject[] = [
  {
    path: '/gatsby/advanced/deployment/hosting-options',
    element: <HostingOptions />,
  },
  {
    path: '/gatsby/advanced/deployment/build-and-deploy',
    element: <BuildAndDeploy />,
  },
  {
    path: '/gatsby/advanced/deployment/preview-and-env-vars',
    element: <PreviewAndEnvVars />,
  },
];

export default Deployment;
