import { RouteObject } from 'react-router-dom';

import MernAndAuth from "@/Pages/MainTabs/BackEndPages/FrameworksPages/MERNAuthPages/MernAndAuth";
// import MernAndAuthCode from "@/pages/MERNAuthPages/MernAndAuthCode";

const mernAndAuthRoutes: RouteObject[] = [
    {
        path: '/mern',
        element: <MernAndAuth />,
    },
    // {
    //     path: '/mern/merncode',
    //     element: <MernAndAuthCode />,
    // },
];

export default mernAndAuthRoutes;