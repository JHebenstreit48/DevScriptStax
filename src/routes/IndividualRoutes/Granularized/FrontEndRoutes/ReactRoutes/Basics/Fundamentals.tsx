import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/Fundamentals/Introduction"
    )
);

const Fundamentals: RouteObject[] = [
    {
        path: '/react/basics/fundamentals/introduction',
        element: <Introduction />
    }
];

export default Fundamentals;