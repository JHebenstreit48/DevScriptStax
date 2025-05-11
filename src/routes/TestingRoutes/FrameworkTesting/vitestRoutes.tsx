import { RouteObject } from "react-router-dom";

import Vitest from "@/Pages/TestingPages/VitestTesting";
// import VitestCode from "@/pages/TestingPages/VitestTestingCode";

const vitestRoutes: RouteObject[] = [
    {
        path: '/testing/vitesttesting',
        element: <Vitest />,
    },
    // {
    //     path: '/testing/vitesttestingcode',
    //     element: <VitestCode />,
    // },
];

export default vitestRoutes;