import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSRuntimeAndAPIs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/RuntimeAndConfig/JSRuntimeAndAPIs'));
const EnvAndSecrets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/RuntimeAndConfig/EnvAndSecrets'));

const RuntimeAndConfig: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/basics/runtime-config/js-runtime-apis',
    element: <JSRuntimeAndAPIs />,
  },
  {
    path: '/akamai-edgeworkers/basics/runtime-config/env-secrets',
    element: <EnvAndSecrets />,
  },
];

export default RuntimeAndConfig;
