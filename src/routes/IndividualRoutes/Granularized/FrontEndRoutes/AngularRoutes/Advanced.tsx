import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const CDBasics = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Advanced/ChangeDetection/Basics"
    )
);

const angularAdvanced: RouteObject[] = [
  {
    path: "/angular/advanced/changedetection/basics",
    element: <CDBasics />,
  },
];

export default angularAdvanced;