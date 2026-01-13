import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AzureCLIAndAuth = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Setup/AzureCLIAndAuth'));
const FirstFunction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Setup/FirstFunction'));

const Setup: RouteObject[] = [
  {
    path: '/azure-functions/basics/setup/azure-cli-auth',
    element: <AzureCLIAndAuth />,
  },
  {
    path: '/azure-functions/basics/setup/first-function',
    element: <FirstFunction />,
  },
];

export default Setup;
