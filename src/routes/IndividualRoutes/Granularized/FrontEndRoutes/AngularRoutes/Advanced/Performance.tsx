import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const BundleOptimization = lazy(() => import("@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/PerformancePages/BundleOptimization"));

const BudgetsProfiling = lazy(() => import("@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/PerformancePages/BudgetsProfiling"));

const performance: RouteObject[] = [
{
    path: '/angular/advanced/performance/bundle-optimization',
    element: <BundleOptimization />
},
{
    path: '/angular/advanced/performance/budgets-profiling',
    element: <BudgetsProfiling />
}
];

export default performance;