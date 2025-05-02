import { RouteObject } from 'react-router-dom';

import Cypress from "@/Pages/TestingPages/CypressTesting";
// import CypressCode from "@/pages/TestingPages/CypressTestingCode";

const cypressRoutes: RouteObject[] = [
    {
        path: '/testing/cypresstesting',
        element: <Cypress />,
    },
    // {
    //     path: '/testing/cypresstestingcode',
    //     element: <CypressCode />,
    // },
];

export default cypressRoutes;