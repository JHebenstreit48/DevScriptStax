import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const PathAliases = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEnd/Angular/Advanced/TypeScriptIntegration/PathAliases"
    )
);

const AdvancedAliases = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEnd/Angular/Advanced/TypeScriptIntegration/AdvancedAliases"
    )
);

const tsIntegration: RouteObject[] = [
  {
    path: '/angular/advanced/ts-integration/path-aliases',
    element: <PathAliases />,
  },
  {
    path: '/angular/advanced/ts-integration/advanced-aliases',
    element: <AdvancedAliases />,
  }
];

export default tsIntegration;