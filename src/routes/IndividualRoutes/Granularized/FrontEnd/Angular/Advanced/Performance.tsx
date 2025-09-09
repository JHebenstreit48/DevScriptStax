import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const BundleOptimization = lazy(() => import("@/Pages/MainTabs/FrontEnd/Angular/Advanced/PerformancePages/BundleOptimization"));

const BudgetsProfiling = lazy(() => import("@/Pages/MainTabs/FrontEnd/Angular/Advanced/PerformancePages/BudgetsProfiling"));

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