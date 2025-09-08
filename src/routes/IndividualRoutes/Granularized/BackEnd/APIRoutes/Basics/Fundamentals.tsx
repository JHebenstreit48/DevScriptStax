import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const CoreConcepts = lazy(() => import("@/Pages/MainTabs/BackEnd/APIPages/Fundamentals/CoreConcepts"));

const Fundamentals: RouteObject[] = [
    {
        path: '/apis/basics/fundamentals/core-concepts',
        element: <CoreConcepts />,
    }
];

export default Fundamentals;