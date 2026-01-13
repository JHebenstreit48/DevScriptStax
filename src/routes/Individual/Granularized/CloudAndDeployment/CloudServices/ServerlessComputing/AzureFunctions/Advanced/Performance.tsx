import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ColdStartsAndPremium = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Performance/ColdStartsAndPremium'));
const ConcurrencyAndThroughput = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Performance/ConcurrencyAndThroughput'));

const Performance: RouteObject[] = [
  {
    path: '/azure-functions/advanced/performance/cold-starts-premium',
    element: <ColdStartsAndPremium />,
  },
  {
    path: '/azure-functions/advanced/performance/concurrency-throughput',
    element: <ConcurrencyAndThroughput />,
  },
];

export default Performance;
