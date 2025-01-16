import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";

// APIs
import APIs from "@/pages/BackEndPages/APIPages/API";
// import APICode from "@/pages/APIPages/APICode";

// Apollo Server
import ApolloServer from "@/pages/BackEndPages/ApolloServerPages/ApolloServer";
// import ApolloServerCode from "@/pages/ApolloServerPages/ApolloServerCode";

// Angular Notes Start
import AngularStart from "@/pages/FrontEndPages/AngularPages/AngularStart";
import AngularStructure from "@/pages/FrontEndPages/AngularPages/AngularStructure";
// Angular Notes End

// CICD Ops
import CICDOps from "@/pages/ToolsPages/CICDOpsPages/CICDOps";
// import CICDOpsCode from "@/pages/CICDOpsPages/CICDOpsCode";

// CSS Start

// CSS Basics Start
import CSSIntro from "@/pages/FrontEndPages/CSSVanillaPages/CSSBasics/CSSIntro";
import CSSSelectors from "@/pages/FrontEndPages/CSSVanillaPages/CSSBasics/CSSSelectors";
import CSSBoxModel from "@/pages/FrontEndPages/CSSVanillaPages/CSSBasics/CSSBoxModel";
import CSSPositioning from "@/pages/FrontEndPages/CSSVanillaPages/CSSBasics/CSSPositioning";
// CSS Basics End

// CSS Layouts Start
import CSSFlexbox from "@/pages/FrontEndPages/CSSVanillaPages/CSSLayout/CSSFlexbox";
import CSSGrid from "@/pages/FrontEndPages/CSSVanillaPages/CSSLayout/CSSGrid";
// CSS Layouts End

// CSS Advanced Start
import CSSMediaQueries from "@/pages/FrontEndPages/CSSVanillaPages/CSSAdvancedPages/CSSMediaQueries";
import CSSVariables from "@/pages/FrontEndPages/CSSVanillaPages/CSSAdvancedPages/CSSVariables";
import CSSAnimations from "@/pages/FrontEndPages/CSSVanillaPages/CSSAdvancedPages/CSSAnimations";
// CSS Advanced End

import LESS from "@/pages/FrontEndPages/CSSVanillaPages/LESS";
// import LESSCode from "@/pages/CSSPages/LESSCode";
import PostCSS from "@/pages/FrontEndPages/CSSVanillaPages/PostCSS";
// import PostCSSCode from "@/pages/CSSPages/PostCSSCode";

// CSS End

// Cypress Testing
import Cypress from "@/pages/TestingPages/CypressTesting";
// import CypressCode from "@/pages/TestingPages/CypressTestingCode";

// Git
import Git from "@/pages/ToolsPages/GitPages/Git";
// import GitCode from "@/pages/GitPages/GitCode";

// GraphQL
import GraphQL from "@/pages/BackEndPages/GraphQLPages/GraphQL";
// import GraphQLCode from "@/pages/GraphQLPages/GraphQLCode";

// HTML
import HTML from "@/pages/FrontEndPages/HTMLPages/HTML";
// import HTMLCode from "@/pages/HTMLPages/HTMLCode";

// JavaScript
import JavaScript from "@/pages/FrontEndPages/JavaScriptPages/JavaScript";
// import JavaScriptCode from "@/pages/JavaScriptPages/JavaScriptCode";

// Markdown
import Markdown from "@/pages/FrontEndPages/MarkdownPages/Markdown";
// import MarkdownCode from "@/pages/MarkdownPages/MarkdownCode";

// MERN and Auth
import MernAndAuth from "@/pages/BackEndPages/MERNAuthPages/MernAndAuth";
// import MernAndAuthCode from "@/pages/MERNAuthPages/MernAndAuthCode";

// MongoDB
import MongoDB from "@/pages/BackEndPages/MongoDBPages/MongoDB";
// import MongoDBCode from "@/pages/MongoDBPages/MongoDBCode";

// Node.js
import Node from "@/pages/BackEndPages/NodePages/Node";
// import NodeCode from "@/pages/NodePages/NodeCode";

// PostgreSQL
import PostgreSQL from "@/pages/BackEndPages/PostgreSQLPages/PostgreSQL";
// import PostgreSQLCode from "@/pages/PostgreSQLPages/PostgreSQLCode";

// Python
import Python from "@/pages/ProgrammingLanguagesPages/PythonPages/Python";
// import PythonCode from "@/pages/PythonPages/PythonCode";

// React and Related Frameworks
import React from "@/pages/FrontEndPages/ReactPages/React";
// import ReactCode from "@/pages/ReactPages/ReactCode";
import ReactAndTypeScript from "@/pages/FrontEndPages/ReactPages/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";
import ReactFullStack from "@/pages/FrontEndPages/ReactPages/ReactFullStack";
// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";
import ReactNative from "@/pages/FrontEndPages/ReactPages/ReactNative";
// import ReactNativeCode from "@/pages/ReactPages/ReactNativeCode";

// Redux
import Redux from "@/pages/FrontEndPages/ReduxPages/Redux";
// import ReduxCode from "@/pages/ReduxPages/ReduxCode";

// Servers
import Servers from "@/pages/BackEndPages/ServerPages/Servers";
// import ServerCode from "@/pages/ServerPages/ServerCode";

// Testing
import Testing from "@/pages/TestingPages/Testing";
// import TestingCode from "@/pages/TestingPages/TestingCode";
import Vitest from "@/pages/TestingPages/VitestTesting";
// import VitestCode from "@/pages/TestingPages/VitestTestingCode";

// TypeScript
import TypeScript from "@/pages/ProgrammingLanguagesPages/TypeScriptPages/TypeScript";
// import TypeScriptCode from "@/pages/TypeScriptPages/TypeScriptCode";

// Vue
import Vue from "@/pages/FrontEndPages/VuePages/Vue";

// import VueCode from "@/pages/VuePages/VueCode";

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
            {
                path: '/frontendpages/angularpages/gettingstarted',
                element: <AngularStart />,
            },
            {
                path: '/frontendpages/angularpages/projectstructure',
                element: <AngularStructure />,
            },
            {
                path: '/apis',
                element: <APIs />,
            },
            // {
            //     path: '/apis/apicode',
            //     element: <APICode />,
            // },
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
                path: '/css/basics/intro',
                element: <CSSIntro />,
            },
            {
                path: '/css/basics/selectors',
                element: <CSSSelectors />,
            },
            {
                path: '/css/basics/boxmodel',
                element: <CSSBoxModel />,
            },
            {
                path: '/css/basics/positioning',
                element: <CSSPositioning />,
            },
            {
                path: '/css/basics/layouts/flexbox',
                element: <CSSFlexbox />,
            },
            {
                path: '/css/basics/layouts/grid',
                element: <CSSGrid />,
            },
            {
                path: '/css/basics/advanced/mediaqueries',
                element: <CSSMediaQueries />,
            },
            {
                path: '/css/basics/advanced/variables',
                element: <CSSVariables />,
            },
            {
                path: '/css/basics/advanced/animations',
                element: <CSSAnimations />,
            },
            {
                path: '/css/less',
                element: <LESS />,
            },
            // {
            //     path: '/css/less/lesscode',
            //     element: <LESSCode />,
            // },
            {
                path: '/css/postcss',
                element: <PostCSS />,
            },
            // {
            //     path: '/css/postcss/postcsscode',
            //     element: <PostCSSCode />,
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
                path: '/html',
                element: <HTML />,
            },
            // {
            //     path: '/html/htmlcode',
            //     element: <HTMLCode />,
            // },
            {
                path: '/javascript',
                element: <JavaScript />,
            },
            // {
            //     path: '/javascript/javascriptcode',
            //     element: <JavaScriptCode />,
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
