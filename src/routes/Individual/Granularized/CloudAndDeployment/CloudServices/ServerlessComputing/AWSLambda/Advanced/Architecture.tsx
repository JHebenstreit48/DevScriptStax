import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RetriesAndDLQs = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Architecture/RetriesAndDLQs'));
const Idempotency = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Architecture/Idempotency'));

const Architecture: RouteObject[] = [
  {
    path: '/aws-lambda/advanced/architecture/retries-dlqs',
    element: <RetriesAndDLQs />,
  },
  {
    path: '/aws-lambda/advanced/architecture/idempotency',
    element: <Idempotency />,
  },
];

export default Architecture;
