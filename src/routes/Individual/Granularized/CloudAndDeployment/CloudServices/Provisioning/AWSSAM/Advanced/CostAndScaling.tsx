import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Optimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/CostAndScaling/Optimization'));
const QuotasAndLimits = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/CostAndScaling/QuotasAndLimits'));

const CostAndScaling: RouteObject[] = [
  {
    path: '/aws-sam/advanced/cost-scaling/optimization',
    element: <Optimization />,
  },
  {
    path: '/aws-sam/advanced/cost-scaling/quotas-limits',
    element: <QuotasAndLimits />,
  },
];

export default CostAndScaling;
