import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ColdStartsAndCPUMemory = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Performance/ColdStartsAndCPUMemory'));
const MinInstances = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Performance/MinInstances'));

const Performance: RouteObject[] = [
  {
    path: '/google-cloud-functions/advanced/performance/cold-starts-cpu-memory',
    element: <ColdStartsAndCPUMemory />,
  },
  {
    path: '/google-cloud-functions/advanced/performance/min-instances',
    element: <MinInstances />,
  },
];

export default Performance;
