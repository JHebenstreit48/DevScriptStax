import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(() => import("@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ComponentsPages/Introduction"));

const Components: RouteObject[] = [
    {
        path: "/angular/basics/coreconcepts/components/intro",
        element: <Introduction />,
    },
];

export default Components;