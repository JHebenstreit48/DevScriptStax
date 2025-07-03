import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HTML5Features = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Advanced/Topics/Features"));
const WebAccess = lazy(() => import ("@/Pages/MainTabs/FrontEndPages/HTMLPages/Advanced/Topics/WebAccessibility"));

const htmlAdvanced: RouteObject[] = [
    {
        path: '/html/advanced/topics/html5features',
        element: <HTML5Features />
    },
    {
        path: '/html/advanced/topics/accessibility',
        element: <WebAccess />
    }
];

export default htmlAdvanced;