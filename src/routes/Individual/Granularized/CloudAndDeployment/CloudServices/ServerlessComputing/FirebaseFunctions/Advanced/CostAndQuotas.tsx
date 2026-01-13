import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BudgetsAndQuotas = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/CostAndQuotas/BudgetsAndQuotas'));
const Optimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/CostAndQuotas/Optimization'));

const CostAndQuotas: RouteObject[] = [
  {
    path: '/firebase-functions/advanced/cost-quotas/budgets-quotas',
    element: <BudgetsAndQuotas />,
  },
  {
    path: '/firebase-functions/advanced/cost-quotas/optimization',
    element: <Optimization />,
  },
];

export default CostAndQuotas;
