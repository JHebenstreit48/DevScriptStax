import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Structure = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/Structure/Structure"
    )
);
const ConfigFiles = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/Structure/ConfigurationFiles"
    )
);
const NamingConventions = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/Structure/NamingConventions"
    )
);

const StructureRoutes: RouteObject[] = [
  {
    path: "/angular/basics/structure/structure",
    element: <Structure />,
  },
  {
    path: "/angular/basics/structure/configfiles",
    element: <ConfigFiles />,
  },
  {
    path: "/angular/basics/structure/namingconventions",
    element: <NamingConventions />,
  },
];

export default StructureRoutes;
