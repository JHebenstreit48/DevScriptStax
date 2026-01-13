import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContextAndCancel = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/Concurrency/ContextAndCancel'));
const WorkerPools = lazy(() => import('@/Pages/MainTabs/Languages/Go/Advanced/Concurrency/WorkerPools'));

const Concurrency: RouteObject[] = [
  {
    path: '/go/advanced/concurrency/context-cancel',
    element: <ContextAndCancel />,
  },
  {
    path: '/go/advanced/concurrency/worker-pools',
    element: <WorkerPools />,
  },
];

export default Concurrency;
