import { RouteObject } from 'react-router-dom';

import ReactIntro from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/Fundamentals/Introduction';
import ReactSetup from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/Fundamentals/Setup';

import ReactAndTypeScript from "@/Pages/MainTabs/FrontEndPages/ReactPages/ReactAndTypeScript/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";

import ReactFullStack from "@/Pages/MainTabs/FrontEndPages/ReactPages/ReactFullStack/ReactFullStack";
import ReactStructure from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/Fundamentals/Structure';


// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";


const reactRoutes: RouteObject[] = [
    {
        path: '/react/basics/fundamentals/introduction',
        element: <ReactIntro />
    },
    {
        path: '/react/basics/fundamentals/setup',
        element: <ReactSetup />
    },
    {
        path: '/react/basics/fundamentals/structure',
        element: <ReactStructure />
    },
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
];

export default reactRoutes;