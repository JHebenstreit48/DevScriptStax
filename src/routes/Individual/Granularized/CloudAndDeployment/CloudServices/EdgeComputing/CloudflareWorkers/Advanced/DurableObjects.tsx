import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Patterns = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/DurableObjects/Patterns'));
const AlarmsAndCoordination = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/DurableObjects/AlarmsAndCoordination'));

const DurableObjects: RouteObject[] = [
  {
    path: '/cloudflare-workers/advanced/durable-objects/patterns',
    element: <Patterns />,
  },
  {
    path: '/cloudflare-workers/advanced/durable-objects/alarms-coordination',
    element: <AlarmsAndCoordination />,
  },
];

export default DurableObjects;
