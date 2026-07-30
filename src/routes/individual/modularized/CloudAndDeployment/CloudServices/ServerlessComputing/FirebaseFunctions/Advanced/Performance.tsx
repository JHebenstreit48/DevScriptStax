import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ColdStartsAndMinInstances = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Performance/ColdStartsAndMinInstances'));
const ConcurrencyAndTimeouts = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Performance/ConcurrencyAndTimeouts'));

const Performance: RouteObject[] = [
  {
    path: '/firebase-functions/advanced/performance/cold-starts-min-instances',
    element: <ColdStartsAndMinInstances />,
  },
  {
    path: '/firebase-functions/advanced/performance/concurrency-timeouts',
    element: <ConcurrencyAndTimeouts />,
  },
];

export default Performance;
