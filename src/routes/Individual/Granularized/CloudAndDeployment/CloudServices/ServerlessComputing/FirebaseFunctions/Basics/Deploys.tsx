import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RegionsAndMinInstances = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Deploys/RegionsAndMinInstances'));
const LocalEmulators = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Deploys/LocalEmulators'));

const Deploys: RouteObject[] = [
  {
    path: '/firebase-functions/basics/deploys/regions-min-instances',
    element: <RegionsAndMinInstances />,
  },
  {
    path: '/firebase-functions/basics/deploys/local-emulators',
    element: <LocalEmulators />,
  },
];

export default Deploys;
