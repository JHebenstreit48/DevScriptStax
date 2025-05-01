import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/ErrorHomeSplash/Error";
import Home from "@/Pages/ErrorHomeSplash/Home";

// ========================================================
//                    Front End Routes Start
// ========================================================
import frontEndRoutes from "@/routes/frontEndRoutes";

// ========================================================
//                      API Pages Start
// ========================================================

// ---------- API Introduction Start ----------
import CoreConcepts from "@/Pages/BackEndPages/APIPages/APIFundamentals/CoreAPIConcepts";
// ---------- API Introduction End ----------

// ---------- Types of APIs Start ----------
import PublicVPrivate from "@/Pages/BackEndPages/APIPages/TypesOfAPIs/PubVSPrivate";
import RESTVSGraphQLVSSOAP from "@/Pages/BackEndPages/APIPages/TypesOfAPIs/RestVSGraphVSSOAP";
// ---------- Types of APIs End ----------

// ========================================================
//                       API Pages End
// ========================================================

// ========================================================
//               GraphQL and Apollo Pages Start
// ========================================================

import ApolloServer from "@/Pages/GraphQLAndApolloPages/ApolloServerPages/ApolloServer";
// import ApolloServerCode from "@/pages/ApolloServerPages/ApolloServerCode";

import GraphQL from "@/Pages/GraphQLAndApolloPages/GraphQLPages/GraphQL";
// import GraphQLCode from "@/pages/GraphQLPages/GraphQLCode";

// ========================================================
//                GraphQL and Apollo Pages End
// ========================================================


// ========================================================
//                        CI/CD Ops Start
// ========================================================

import CICDOps from "@/Pages/ToolsPages/CICDOpsPages/CICDOps";
// import CICDOpsCode from "@/pages/CICDOpsPages/CICDOpsCode";

// ========================================================
//                         CI/CD Ops End
// ========================================================


// ========================================================
//                    Cypress Testing Start
// ========================================================

import Cypress from "@/Pages/TestingPages/CypressTesting";
// import CypressCode from "@/pages/TestingPages/CypressTestingCode";

// ========================================================
//                     Cypress Testing End
// ========================================================


// ========================================================
//                          Git Notes Start
// ========================================================

import Git from "@/Pages/ToolsPages/GitPages/Git";
// import GitCode from "@/pages/GitPages/GitCode";

// ========================================================
//                           Git Notes End
// ========================================================

// ========================================================
//                      Markdown Notes Start
// ========================================================

import Markdown from "@/Pages/FrontEndPages/MarkdownPages/Markdown";
// import MarkdownCode from "@/pages/MarkdownPages/MarkdownCode";

// ========================================================
//                       Markdown Notes End
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
//                     MongoDB Notes Start
// ========================================================

import MongoDB from "@/Pages/BackEndPages/DatabasesPages/MongoDBPages/MongoDB";
// import MongoDBCode from "@/pages/MongoDBPages/MongoDBCode";

// ========================================================
//                      MongoDB Notes End
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
//              React and Related Frameworks Start
// ========================================================

import React from "@/Pages/FrontEndPages/ReactPages/ReactBasics/IntroAndSetup";
// import ReactCode from "@/pages/ReactPages/ReactCode";

import ReactAndTypeScript from "@/Pages/FrontEndPages/ReactPages/ReactAndTypeScript/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";

import ReactFullStack from "@/Pages/FrontEndPages/ReactPages/ReactFullStack/ReactFullStack";
// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";

import ReactNative from "@/Pages/FrontEndPages/ReactPages/ReactNative/ReactNative";
// import ReactNativeCode from "@/pages/ReactPages/ReactNativeCode";

// ========================================================
//               React and Related Frameworks End
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
            {
                path: '/apis/intro/fundamentals/overview',
                element: <CoreConcepts />,
            },
            {
                path: '/apis/intro/types/publicvsprivate',
                element: <PublicVPrivate />,
            },
            {
                path: '/apis/intro/types/comparison',
                element: <RESTVSGraphQLVSSOAP />,
            },
            {
                path: '/apolloserver',
                element: <ApolloServer />,
            },
            // {
            //     path: '/apolloserver/apolloservercode',
            //     element: <ApolloServerCode />,
            // },
            {
                path: '/cicdops',
                element: <CICDOps />,
            },
            // {
            //     path: '/cicdops/cicdopscode',
            //     element: <CICDOpsCode />,
            // },

            {
                path: '/git',
                element: <Git />,
            },
            // {
            //     path: '/git/gitcode',
            //     element: <GitCode />,
            // },
            {
                path: '/graphql',
                element: <GraphQL />,
            },
            // {
            //     path: '/graphql/graphqlcode',
            //     element: <GraphQLCode />,
            // },

            {
                path: '/markdown',
                element: <Markdown />,
            },
            // {
            //     path: '/markdown/markdowncode',
            //     element: <MarkdownCode />,
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
                path: '/mongodb',
                element: <MongoDB />,
            },
            // {
            //     path: '/mongodb/mongodbcode',
            //     element: <MongoDBCode />,
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
                path: '/testing/cypresstesting',
                element: <Cypress />,
            },
            // {
            //     path: '/testing/cypresstestingcode',
            //     element: <CypressCode />,
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
