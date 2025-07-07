import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
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

const Fundamentals: RouteObject[] = [
  {
    path: "/angular/basics/fundamentals/introduction",
    element: <Introduction />,
  },
  {
    path: "/angular/basics/fundamentals/creatingrunning",
    element: <CreateRun />,
  },
  {
    path: "/angular/basics/fundamentals/cli",
    element: <CLI />,
  },
];

export default Fundamentals;
