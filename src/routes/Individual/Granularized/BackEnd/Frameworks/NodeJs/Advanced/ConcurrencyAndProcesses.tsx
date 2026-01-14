import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WorkerThreads = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses/WorkerThreads'));
const ChildProcessAndSpawn = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses/ChildProcessAndSpawn'));

const ConcurrencyAndProcesses: RouteObject[] = [
  {
    path: '/frameworks/nodejs/advanced/concurrency-processes/worker-threads',
    element: <WorkerThreads />,
  },
  {
    path: '/frameworks/nodejs/advanced/concurrency-processes/child-process-spawn',
    element: <ChildProcessAndSpawn />,
  },
];

export default ConcurrencyAndProcesses;
