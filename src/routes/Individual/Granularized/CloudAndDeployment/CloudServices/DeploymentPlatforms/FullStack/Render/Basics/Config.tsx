import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EnvVariablesAndSecrets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Config/EnvVariablesAndSecrets'));
const BuildAndStart = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Config/BuildAndStart'));

const Config: RouteObject[] = [
  {
    path: '/render/basics/config/env-variables',
    element: <EnvVariablesAndSecrets />,
  },
  {
    path: '/render/basics/config/build-start',
    element: <BuildAndStart />,
  },
];

export default Config;
