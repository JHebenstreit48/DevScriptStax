import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FirebaseCLIAndProject = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Setup/FirebaseCLIAndProject'));
const InitFunctions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Setup/InitFunctions'));

const Setup: RouteObject[] = [
  {
    path: '/firebase-functions/basics/setup/firebase-cli-project',
    element: <FirebaseCLIAndProject />,
  },
  {
    path: '/firebase-functions/basics/setup/init-functions',
    element: <InitFunctions />,
  },
];

export default Setup;
