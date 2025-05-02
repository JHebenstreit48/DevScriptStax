import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/ErrorHomeSplash/Error";
import Home from "@/Pages/ErrorHomeSplash/Home";

import backEndRoutes from "@/routes/RoutesDirectories/backEndRoutesCombined";
import frontEndRoutes from "@/routes/RoutesDirectories/frontEndRoutes";
import graphqlAndApolloRoutes from "@/routes/RoutesDirectories/graphqlAndApolloRoutes";
import programmingLanguagesRoutes from "@/routes/RoutesDirectories/programmingLanguagesRoutes";
import testingRoutes from "@/routes/RoutesDirectories/testingRoutesCombined";
import toolRoutes from "@/routes/RoutesDirectories/toolsRoutesCombined";

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
            ...backEndRoutes,
            ...frontEndRoutes,
            ...graphqlAndApolloRoutes,
            ...programmingLanguagesRoutes,
            ...testingRoutes,
            ...toolRoutes,

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

        ],
    },
]);    
