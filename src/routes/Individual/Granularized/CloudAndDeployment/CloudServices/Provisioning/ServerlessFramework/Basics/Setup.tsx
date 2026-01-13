import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallCLI = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Setup/InstallCLI'));
const Credentials = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Setup/Credentials'));

const Setup: RouteObject[] = [
  {
    path: '/serverless-framework/basics/setup/install-cli',
    element: <InstallCLI />,
  },
  {
    path: '/serverless-framework/basics/setup/credentials',
    element: <Credentials />,
  },
];

export default Setup;
