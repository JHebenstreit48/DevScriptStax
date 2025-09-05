import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(() => import('@/Pages/MainTabs/TestingPages/CypressPages/Basics/Fundamentals/Introduction'));
const Setup = lazy(() => import('@/Pages/MainTabs/TestingPages/CypressPages/Basics/Fundamentals/Setup'));

const Fundamentals: RouteObject[] = [
{
    path: '/testing/e2e/cypress/basics/fundamentals/introduction',
    element: <Introduction />,
},
{
    path: '/testing/e2e/cypress/basics/fundamentals/setup',
    element: <Setup />,
},
];

export default Fundamentals;