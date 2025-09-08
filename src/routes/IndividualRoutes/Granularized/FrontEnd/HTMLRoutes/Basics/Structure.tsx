import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Attributes = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Attributes"));
const Elements = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Basics/Structure/Elements"));

const Structures: RouteObject[] = [
    {
        path: '/html/basics/structure/elements',
        element: <Elements />,
    },
    {
        path: '/html/basics/structure/attributes',
        element: <Attributes />,
    },
];

export default Structures;