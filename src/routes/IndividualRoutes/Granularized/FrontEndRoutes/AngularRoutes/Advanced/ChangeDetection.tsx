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
    path: '/angular/advanced/change-detection/basics',
    element: <CDBasics />,
  },
  {
    path: '/angular/advanced/change-detection/optimizing',
    element: <CDOptimizing />,
  },
  {
    path: '/angular/advanced/change-detection/template-optimization',
    element: <CDTemplRenderOptim />,
  },
];

export default changeDetection;