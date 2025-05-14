import { RouteObject } from 'react-router-dom';

import React from "@/Pages/MainTabs/FrontEndPages/ReactPages/ReactBasics/IntroAndSetup";
// import ReactCode from "@/pages/ReactPages/ReactCode";

import ReactAndTypeScript from "@/Pages/MainTabs/FrontEndPages/ReactPages/ReactAndTypeScript/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";

import ReactFullStack from "@/Pages/MainTabs/FrontEndPages/ReactPages/ReactFullStack/ReactFullStack";
// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";


const reactRoutes: RouteObject[] = [
    {
        path: '/react',
        element: <React />,
    },
    // {
    //     path: '/react/reactcode',
    //     element: <ReactCode />,
    // },
    {
        path: '/react/reactandtypescript',
        element: <ReactAndTypeScript />,
    },
    // {
    //     path: '/react/reactandtypescriptcode',
    //     element: <ReactAndTypeScriptCode />,
    // },
    {
        path: '/react/reactfullstack',
        element: <ReactFullStack />,
    },
    // {
    //     path: '/react/reactfullstackcode',
    //     element: <ReactFullStackCode />,
    // },
    // {
    //     path: '/react/reactnativecode',
    //     element: <ReactNativeCode />,
    // },
];

export default reactRoutes;