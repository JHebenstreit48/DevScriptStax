import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ColdStarts = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Performance/ColdStarts'));
const Concurrency = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Performance/Concurrency'));

const Performance: RouteObject[] = [
  {
    path: '/aws-lambda/advanced/performance/cold-starts',
    element: <ColdStarts />,
  },
  {
    path: '/aws-lambda/advanced/performance/concurrency',
    element: <Concurrency />,
  },
];

export default Performance;
