import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IAMAndCLI = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Setup/IAMAndCLI'));
const FirstFunction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Setup/FirstFunction'));

const Setup: RouteObject[] = [
  {
    path: '/aws-lambda/basics/setup/iam-cli',
    element: <IAMAndCLI />,
  },
  {
    path: '/aws-lambda/basics/setup/first-function',
    element: <FirstFunction />,
  },
];

export default Setup;
