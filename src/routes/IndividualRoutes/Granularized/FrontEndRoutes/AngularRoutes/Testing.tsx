import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(() => import("@/Pages/MainTabs/FrontEndPages/AngularPages/TestingNav/Unit/Introduction"));

const angularTesting: RouteObject[] = [
    {
        path: "/angular/testing/unit/introduction",
        element: <Introduction />
    }
];

export default angularTesting;