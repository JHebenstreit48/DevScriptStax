import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPAndCallable = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Triggers/HTTPAndCallable'));
const FirestoreAndStorage = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Triggers/FirestoreAndStorage'));

const Triggers: RouteObject[] = [
  {
    path: '/firebase-functions/basics/triggers/http-callable',
    element: <HTTPAndCallable />,
  },
  {
    path: '/firebase-functions/basics/triggers/firestore-storage',
    element: <FirestoreAndStorage />,
  },
];

export default Triggers;
