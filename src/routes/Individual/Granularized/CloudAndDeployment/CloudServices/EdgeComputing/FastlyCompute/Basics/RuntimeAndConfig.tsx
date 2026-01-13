import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LanguagesAndSDKs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/RuntimeAndConfig/LanguagesAndSDKs'));
const EnvAndSecrets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/RuntimeAndConfig/EnvAndSecrets'));

const RuntimeAndConfig: RouteObject[] = [
  {
    path: '/fastly-compute/basics/runtime-config/languages-sdks',
    element: <LanguagesAndSDKs />,
  },
  {
    path: '/fastly-compute/basics/runtime-config/env-secrets',
    element: <EnvAndSecrets />,
  },
];

export default RuntimeAndConfig;
