import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CostControls = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/CostAndScaling/CostControls'));
const ConcurrencyAndThroughput = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/CostAndScaling/ConcurrencyAndThroughput'));

const CostAndScaling: RouteObject[] = [
  {
    path: '/google-cloud-functions/advanced/cost-scaling/cost-controls',
    element: <CostControls />,
  },
  {
    path: '/google-cloud-functions/advanced/cost-scaling/concurrency-throughput',
    element: <ConcurrencyAndThroughput />,
  },
];

export default CostAndScaling;
