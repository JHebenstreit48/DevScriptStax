import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DurableFunctions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Architecture/DurableFunctions'));
const RetriesAndPoisonQueues = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Architecture/RetriesAndPoisonQueues'));

const Architecture: RouteObject[] = [
  {
    path: '/azure-functions/advanced/architecture/durable-functions',
    element: <DurableFunctions />,
  },
  {
    path: '/azure-functions/advanced/architecture/retries-poison-queues',
    element: <RetriesAndPoisonQueues />,
  },
];

export default Architecture;
