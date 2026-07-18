import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EnvVariablesAndSecrets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Configuration/EnvVariablesAndSecrets'));
const BuildAndStart = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Configuration/BuildAndStart'));

const Config: RouteObject[] = [
  {
    path: '/render/basics/configuration/env-variables',
    element: <EnvVariablesAndSecrets />,
  },
  {
    path: '/render/basics/configuration/build-start',
    element: <BuildAndStart />,
  },
];

export default Config;
