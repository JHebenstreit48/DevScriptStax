import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// ---------------------- Angular Fundamentals Start ----------------------
const AngularIntro = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/Fundamentals/Introduction"
    )
);
const CreateRun = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/Fundamentals/CreatingRunningApp"
    )
);
const CLI = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/Fundamentals/CLI"
    )
);
// ---------------------- Angular Fundamentals End ------------------------
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
// ----------------------- Angular Structure Start -----------------------

const angularBasics: RouteObject[] = [
  // -------------------- Angular Fundamentals Start --------------------
  {
    path: "/angular/basics/fundamentals/intro",
    element: <AngularIntro />,
  },
  {
    path: "/angular/basics/fundamentals/creatingrunning",
    element: <CreateRun />,
  },
  {
    path: "/angular/basics/fundamentals/cli",
    element: <CLI />,
  },
  // --------------------- Angular Fundamentals End ----------------------

  // --------------------- Angular Structure Start ----------------------
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
  // ---------------------- Angular Structure End ----------------------
];

export default angularBasics;