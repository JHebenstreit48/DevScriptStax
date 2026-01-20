import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildSettings = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/BuildsAndConfig/BuildSettings'));
const EnvVarsAndSecrets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/BuildsAndConfig/EnvVarsAndSecrets'));

const BuildsAndConfig: RouteObject[] = [
  {
    path: '/netlify/basics/builds-config/build-settings',
    element: <BuildSettings />,
  },
  {
    path: '/netlify/basics/builds-config/env-vars-secrets',
    element: <EnvVarsAndSecrets />,
  },
];

export default BuildsAndConfig;
