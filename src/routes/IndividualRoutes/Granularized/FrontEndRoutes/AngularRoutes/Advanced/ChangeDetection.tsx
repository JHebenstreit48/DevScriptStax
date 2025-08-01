import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const CDBasics = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/ChangeDetection/Basics"
    )
);
const CDOptimizing = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/ChangeDetection/Optimizing"
    )
);
const CDTemplRenderOptim = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/ChangeDetection/TemplateRenderOptim"
    )
);

const changeDetection: RouteObject[] = [
  {
    path: "/angular/advanced/changedetection/basics",
    element: <CDBasics />,
  },
  {
    path: "/angular/advanced/changedetection/optimizing",
    element: <CDOptimizing />,
  },
  {
    path: "/angular/advanced/changedetection/templateoptimization",
    element: <CDTemplRenderOptim />,
  },
];

export default changeDetection;
