import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const PathAliases = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/TypeScriptIntegration/PathAliases"
    )
);

const typeScriptIntegration: RouteObject[] = [
  {
    path: "/angular/advanced/tsintegration/path-aliases",
    element: <PathAliases />,
  },
];

export default typeScriptIntegration;
