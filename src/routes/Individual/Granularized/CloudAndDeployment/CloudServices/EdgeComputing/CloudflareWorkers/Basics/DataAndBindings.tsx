import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const KVBasics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/DataAndBindings/KVBasics'));
const DurableObjects = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/DataAndBindings/DurableObjects'));

const DataAndBindings: RouteObject[] = [
  {
    path: '/cloudflare-workers/basics/data-bindings/kv-basics',
    element: <KVBasics />,
  },
  {
    path: '/cloudflare-workers/basics/data-bindings/durable-objects',
    element: <DurableObjects />,
  },
];

export default DataAndBindings;
