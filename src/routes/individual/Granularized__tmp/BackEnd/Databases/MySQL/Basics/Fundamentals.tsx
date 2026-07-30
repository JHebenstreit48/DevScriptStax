import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import('@/pages/mainTabs/BackEnd/Databases/MySQL/Basics/Fundamentals/Introduction')
);

const Fundamentals: RouteObject[] = [
    {
        path: '/mysql/basics/fundamentals/introduction',
        element: <Introduction />,
    }
];

export default Fundamentals;