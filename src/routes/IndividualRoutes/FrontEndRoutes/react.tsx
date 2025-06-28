import { RouteObject } from 'react-router-dom';

import ReactIntro from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/Fundamentals/Introduction';
import ReactSetup from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/SetupAndStructure/Setup';

// import ReactAndTypeScript from "@/Pages/MainTabs/FrontEndPages/ReactPages/ReactAndTypeScript/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";

// import ReactFullStack from "@/Pages/MainTabs/FrontEndPages/ReactPages/ReactFullStack/ReactFullStack";
import ReactStructure from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/SetupAndStructure/Structure';


// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";


const reactRoutes: RouteObject[] = [
    // React Basics Start

    // React Basics Fundamentals Start
    {
        path: '/react/basics/fundamentals/introduction',
        element: <ReactIntro />
    },

    // React Basics Fundamentals End

    // React Basics Setup and Structure Start
    {
        path: '/react/basics/setup/setup',
        element: <ReactSetup />
    },
    {
        path: '/react/basics/setup/structure',
        element: <ReactStructure />
    },
    // React Basics Setup and Structure End

    // React Core Concepts Start
    {
        
    },
    {

    },

    // React Core Concepts End

    // React Basics End

    // React Intermediate Start





    // React Intermediate End
    // {
    //     path: '/react/reactandtypescript',
    //     element: <ReactAndTypeScript />,
    // },
    // {
    //     path: '/react/reactandtypescriptcode',
    //     element: <ReactAndTypeScriptCode />,
    // },
    // {
    //     path: '/react/reactfullstack',
    //     element: <ReactFullStack />,
    // },
    // {
    //     path: '/react/reactfullstackcode',
    //     element: <ReactFullStackCode />,
    // },
];

export default reactRoutes;