import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/ErrorHomeSplash/Error";
import Home from "@/Pages/ErrorHomeSplash/Home";

import frontEndRoutes from "@/routes/RoutesDirectories/frontEndRoutes";
import backEndRoutes from "@/routes/RoutesDirectories/backEndRoutesCombined";
import toolRoutes from "@/routes/RoutesDirectories/toolsRoutes";
import testingRoutes from "./RoutesDirectories/testingRoutesCombined";
import graphqlAndApolloRoutes from "@/routes/RoutesDirectories/graphqlAndApolloRoutes";

// ========================================================
//                        CI/CD Ops Start
// ========================================================

import CICDOps from "@/Pages/ToolsPages/CICDOpsPages/CICDOps";
// import CICDOpsCode from "@/pages/CICDOpsPages/CICDOpsCode";

// ========================================================
//                         CI/CD Ops End
// ========================================================

// ========================================================
//                   MERN and Auth Notes Start
// ========================================================

import MernAndAuth from "@/Pages/BackEndPages/FrameworksPages/MERNAuthPages/MernAndAuth";
// import MernAndAuthCode from "@/pages/MERNAuthPages/MernAndAuthCode";

// ========================================================
//                    MERN and Auth Notes End
// ========================================================

// ========================================================
//                      Node.js Notes Start
// ========================================================

import Node from "@/Pages/BackEndPages/FrameworksPages/NodePages/Node";
// import NodeCode from "@/pages/NodePages/NodeCode";

// ========================================================
//                       Node.js Notes End
// ========================================================


// ========================================================
//                    PostgreSQL Notes Start
// ========================================================

import PostgreSQL from "@/Pages/BackEndPages/DatabasesPages/PostgreSQLPages/PostgreSQL";
// import PostgreSQLCode from "@/pages/PostgreSQLPages/PostgreSQLCode";

// ========================================================
//                     PostgreSQL Notes End
// ========================================================


// ========================================================
//                      Python Notes Start
// ========================================================

import Python from "@/Pages/ProgrammingLanguagesPages/PythonPages/Python";
// import PythonCode from "@/pages/PythonPages/PythonCode";

// ========================================================
//                       Python Notes End
// ========================================================

// ========================================================
//                        Redux Notes Start
// ========================================================

import Redux from "@/Pages/FrontEndPages/ReduxPages/Redux";
// import ReduxCode from "@/pages/ReduxPages/ReduxCode";

// ========================================================
//                         Redux Notes End
// ========================================================


// ========================================================
//                       Servers Notes Start
// ========================================================

import Servers from "@/Pages/BackEndPages/WebServersPages/ServerPages/Servers";
// import ServerCode from "@/pages/ServerPages/ServerCode";

// ========================================================
//                        Servers Notes End
// ========================================================


// ========================================================
//                       Testing Notes Start
// ========================================================

import Testing from "@/Pages/TestingPages/Testing";
// import TestingCode from "@/pages/TestingPages/TestingCode";

import Vitest from "@/Pages/TestingPages/VitestTesting";
// import VitestCode from "@/pages/TestingPages/VitestTestingCode";

// ========================================================
//                        Testing Notes End
// ========================================================


// ========================================================
//                     TypeScript Notes Start
// ========================================================

import TypeScript from "@/Pages/ProgrammingLanguagesPages/TypeScriptPages/TypeScript";
// import TypeScriptCode from "@/pages/TypeScriptPages/TypeScriptCode";

// ========================================================
//                      TypeScript Notes End
// ========================================================


// ========================================================
//                         Vue Notes Start
// ========================================================

import Vue from "@/Pages/FrontEndPages/VuePages/Vue";


// import VueCode from "@/pages/VuePages/VueCode";

// ========================================================
//                          Vue Notes End
// ========================================================

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            ...frontEndRoutes,
            ...backEndRoutes,
            ...toolRoutes,
            ...testingRoutes,
            ...graphqlAndApolloRoutes,
            
            
            {
                path: '/cicdops',
                element: <CICDOps />,
            },
            // {
            //     path: '/cicdops/cicdopscode',
            //     element: <CICDOpsCode />,
            // },


            {
                path: '/mern',
                element: <MernAndAuth />,
            },
            // {
            //     path: '/mern/merncode',
            //     element: <MernAndAuthCode />,
            // },

            {
                path: '/node',
                element: <Node />,
            },
            // {
            //     path: '/node/nodecode',
            //     element: <NodeCode />,
            // },
            {
                path: '/postgresql',
                element: <PostgreSQL />,
            },
            // {
            //     path: '/postgresql/postgresqlcode',
            //     element: <PostgreSQLCode />,
            // },
            {
                path: '/python',
                element: <Python />,
            },
            // {
            //     path: '/python/pythoncode',
            //     element: <PythonCode />,
            // },
           
            {
                path: '/redux',
                element: <Redux />,
            },
            // {
            //     path: '/redux/reduxcode',
            //     element: <ReduxCode />,
            // },
            {
                path: '/servers',
                element: <Servers />,
            },
            // {
            //     path: '/servers/servercode',
            //     element: <ServerCode />,
            // },
            {
                path: '/testing',
                element: <Testing />,
            },
            // {
            //     path: '/testing/testingcode',
            //     element: <TestingCode />,
            // },

            {
                path: '/testing/vitesttesting',
                element: <Vitest />,
            },
            // {
            //     path: '/testing/vitesttestingcode',
            //     element: <VitestCode />,
            // },
            {
                path: '/typescript',
                element: <TypeScript />,
            },
            // {
            //     path: '/typescript/typescriptcode',
            //     element: <TypeScriptCode />,
            // },
            {
                path: '/vue',
                element: <Vue />,
            },
            // {
            //     path: '/vue/vuecode',
            //     element: <VueCode />,
            // },
        ],
    },
]);    
