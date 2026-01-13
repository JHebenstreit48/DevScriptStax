import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Runtimes = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/RuntimeAndConfig/Runtimes'));
const EnvAndSecrets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/RuntimeAndConfig/EnvAndSecrets'));

const RuntimeAndConfig: RouteObject[] = [
  {
    path: '/firebase-functions/basics/runtime-config/runtimes',
    element: <Runtimes />,
  },
  {
    path: '/firebase-functions/basics/runtime-config/env-secrets',
    element: <EnvAndSecrets />,
  },
];

export default RuntimeAndConfig;
