import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LimitsAndQuotas = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/CostAndScaling/LimitsAndQuotas'));
const CostControls = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/CostAndScaling/CostControls'));

const CostAndScaling: RouteObject[] = [
  {
    path: '/fastly-compute/advanced/cost-scaling/limits-quotas',
    element: <LimitsAndQuotas />,
  },
  {
    path: '/fastly-compute/advanced/cost-scaling/cost-controls',
    element: <CostControls />,
  },
];

export default CostAndScaling;
