import { RouteObject } from 'react-router-dom';

import Vue from "@/Pages/FrontEndPages/VuePages/Vue";
// import VueCode from "@/pages/VuePages/VueCode";

const vueRoutes: RouteObject[] = [
    {
        path: '/vue',
        element: <Vue />,
    },
    // {
    //     path: '/vue/vuecode',
    //     element: <VueCode />,
    // },
];

export default vueRoutes;