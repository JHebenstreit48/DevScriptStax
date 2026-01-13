import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PlansAndBudgets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/CostAndScaling/PlansAndBudgets'));
const ScalingControls = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/CostAndScaling/ScalingControls'));

const CostAndScaling: RouteObject[] = [
  {
    path: '/azure-functions/advanced/cost-scaling/plans-budgets',
    element: <PlansAndBudgets />,
  },
  {
    path: '/azure-functions/advanced/cost-scaling/scaling-controls',
    element: <ScalingControls />,
  },
];

export default CostAndScaling;
