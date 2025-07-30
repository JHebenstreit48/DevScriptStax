import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const BundleOptimization = lazy(() => import("@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/PerformancePages/BundleOptimization"));

const performance: RouteObject[] = [
{
    path: "/angular/advanced/performance/bundleoptimization",
    element: <BundleOptimization />
}
];

export default performance;