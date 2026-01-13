import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Runtimes = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/RuntimeAndConfig/Runtimes'));
const EnvVars = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/RuntimeAndConfig/EnvVars'));

const RuntimeAndConfig: RouteObject[] = [
  {
    path: '/aws-lambda/basics/runtime-config/runtimes',
    element: <Runtimes />,
  },
  {
    path: '/aws-lambda/basics/runtime-config/env-vars-lambda',
    element: <EnvVars />,
  },
];

export default RuntimeAndConfig;
