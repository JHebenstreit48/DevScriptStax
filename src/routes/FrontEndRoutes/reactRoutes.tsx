import { RouteObject } from 'react-router-dom';

import React from "@/Pages/FrontEndPages/ReactPages/ReactBasics/IntroAndSetup";
// import ReactCode from "@/pages/ReactPages/ReactCode";

import ReactAndTypeScript from "@/Pages/FrontEndPages/ReactPages/ReactAndTypeScript/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";

import ReactFullStack from "@/Pages/FrontEndPages/ReactPages/ReactFullStack/ReactFullStack";
// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";

import ReactNative from "@/Pages/FrontEndPages/ReactPages/ReactNative/ReactNative";
// import ReactNativeCode from "@/pages/ReactPages/ReactNativeCode";


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
    {
        path: '/react/reactnative',
        element: <ReactNative />,
    },
    // {
    //     path: '/react/reactnativecode',
    //     element: <ReactNativeCode />,
    // },
];

export default reactRoutes;