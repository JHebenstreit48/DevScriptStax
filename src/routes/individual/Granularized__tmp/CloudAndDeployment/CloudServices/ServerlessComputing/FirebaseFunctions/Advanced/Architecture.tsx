import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BackgroundVsBlocking = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Architecture/BackgroundVsBlocking'));
const IdempotencyAndRetries = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Architecture/IdempotencyAndRetries'));

const Architecture: RouteObject[] = [
  {
    path: '/firebase-functions/advanced/architecture/background-vs-blocking',
    element: <BackgroundVsBlocking />,
  },
  {
    path: '/firebase-functions/advanced/architecture/idempotency-retries',
    element: <IdempotencyAndRetries />,
  },
];

export default Architecture;
