import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LimitsAndQuotas = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/CostAndScaling/LimitsAndQuotas'));
const CostControls = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/CostAndScaling/CostControls'));

const CostAndScaling: RouteObject[] = [
  {
    path: '/akamai-edgeworkers/advanced/cost-scaling/limits-quotas',
    element: <LimitsAndQuotas />,
  },
  {
    path: '/akamai-edgeworkers/advanced/cost-scaling/cost-controls',
    element: <CostControls />,
  },
];

export default CostAndScaling;
