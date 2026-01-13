import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LimitsAndQuotas = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/CostAndScaling/LimitsAndQuotas'));
const CostControls = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/CostAndScaling/CostControls'));

const CostAndScaling: RouteObject[] = [
  {
    path: '/cloudflare-workers/advanced/cost-scaling/limits-quotas',
    element: <LimitsAndQuotas />,
  },
  {
    path: '/cloudflare-workers/advanced/cost-scaling/cost-controls',
    element: <CostControls />,
  },
];

export default CostAndScaling;
