import { RouteObject } from 'react-router-dom';

import Redux from "@/Pages/FrontEndPages/ReduxPages/Redux";
// import ReduxCode from "@/pages/ReduxPages/ReduxCode";


const reduxRoutes: RouteObject[] = [
    {
        path: '/redux',
        element: <Redux />,
    },
    // {
    //     path: '/redux/reduxcode',
    //     element: <ReduxCode />,
    // },
];

export default reduxRoutes;