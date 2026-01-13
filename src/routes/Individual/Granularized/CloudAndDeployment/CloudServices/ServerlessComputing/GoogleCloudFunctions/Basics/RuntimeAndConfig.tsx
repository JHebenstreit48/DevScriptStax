import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Runtimes = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/RuntimeAndConfig/Runtimes'));
const EnvVars = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/RuntimeAndConfig/EnvVars'));

const RuntimeAndConfig: RouteObject[] = [
  {
    path: '/google-cloud-functions/basics/runtime-config/runtimes',
    element: <Runtimes />,
  },
  {
    path: '/google-cloud-functions/basics/runtime-config/env-vars-functions',
    element: <EnvVars />,
  },
];

export default RuntimeAndConfig;
