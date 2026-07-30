import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BundleOptimization = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/Performance/BundleOptimization')
);

const BudgetsProfiling = lazy(
  () => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/Performance/BudgetsAndProfiling')
);

const performance: RouteObject[] = [
  {
    path: '/angular/advanced/performance/bundle-optimization',
    element: <BundleOptimization />,
  },
  {
    path: '/angular/advanced/performance/budgets-profiling',
    element: <BudgetsProfiling />,
  },
];

export default performance;