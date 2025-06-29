import { RouteObject } from 'react-router-dom';

import ReactIntro from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/Fundamentals/Introduction';

import ReactSetup from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/SetupAndStructure/Setup';
import ReactStructure from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/SetupAndStructure/Structure';

import JSXAndRendering from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/CoreConcepts/JSXAndRendering';

import EventHandling from '@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/CoreConcepts/EventHandling';

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
        path: '/react/basics/core/jsx',
        element: <JSXAndRendering />
    },
    {
        path: '/react/basics/core/eventhandling',
        element: <EventHandling />
    },

    // React Core Concepts End

    // React Basics End

    // React Intermediate Start



    // React Intermediate End
];

export default reactRoutes;