import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/Fundamentals/Introduction"));
const History = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/JavaScriptPages/Basics/Fundamentals/History"));

const Fundamentals: RouteObject[] = [
    {
        path: '/javascript/basics/fundamentals/introduction',
        element: <Introduction />
    },
    {
        path: '/javascript/basics/fundamentals/history',
        element: <History />
    }
];

export default Fundamentals;