import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";

// APIs
import APIs from "@/Pages/BackEndPages/APIPages/API";
// import APICode from "@/pages/APIPages/APICode";

// Apollo Server
import ApolloServer from "@/Pages/BackEndPages/ApolloServerPages/ApolloServer";
// import ApolloServerCode from "@/pages/ApolloServerPages/ApolloServerCode";

// Angular Notes Start
import AngularStart from "@/Pages/FrontEndPages/AngularPages/AngularStart";
import AngularStructure from "@/Pages/FrontEndPages/AngularPages/AngularStructure";
// Angular Notes End

// CICD Ops
import CICDOps from "@/Pages/ToolsPages/CICDOpsPages/CICDOps";
// import CICDOpsCode from "@/pages/CICDOpsPages/CICDOpsCode";

// CSS Start

// CSS Basics Start
import CSSIntro from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSIntro";
import CSSSelectors from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSSelectors";
import CSSBoxModel from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSBoxModel";
import CSSPositioning from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSPositioning";
// CSS Basics End

// CSS Layouts Start
import CSSFlexbox from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSLayout/CSSFlexbox";
import CSSGrid from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSLayout/CSSGrid";
// CSS Layouts End

// CSS Advanced Start
import Animations from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/Animations";
import MediaQueries from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/MediaQueries";
import Transform from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/Transform";
import Transitions from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/Transition";
import Variables from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSAdvancedPages/Variables";
// CSS Advanced End

import LESS from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/LESS";
// import LESSCode from "@/pages/CSSPages/LESSCode";
import WhatArePost from "@/Pages/FrontEndPages/CSSPages/CSSPostprocessorsPages/PostCSS";
// import PostCSSCode from "@/pages/CSSPages/PostCSSCode";

// CSS End

// Cypress Testing
import Cypress from "@/Pages/TestingPages/CypressTesting";
// import CypressCode from "@/pages/TestingPages/CypressTestingCode";

// Git
import Git from "@/Pages/ToolsPages/GitPages/Git";
// import GitCode from "@/pages/GitPages/GitCode";

// GraphQL
import GraphQL from "@/Pages/BackEndPages/GraphQLPages/GraphQL";
// import GraphQLCode from "@/pages/GraphQLPages/GraphQLCode";

// HTML Notes Start

// HTML Basics Start
import HTML from "@/Pages/FrontEndPages/HTMLPages/HTMLBasics/HTMLIntro";
import HTMLELements from "@/Pages/FrontEndPages/HTMLPages/HTMLBasics/HTMLElements";
import HTMLAttributes from "@/Pages/FrontEndPages/HTMLPages/HTMLBasics/HTMLAttributes";
import HTMLForms from "@/Pages/FrontEndPages/HTMLPages/HTMLBasics/HTMLForms";
import HTMLSemantics from "@/Pages/FrontEndPages/HTMLPages/HTMLBasics/HTMLSemantics";
// HTML Basics End

// HTML Notes End

// JavaScript
import JavaScript from "@/Pages/FrontEndPages/JavaScriptPages/JavaScript";
// import JavaScriptCode from "@/pages/JavaScriptPages/JavaScriptCode";

// Markdown
import Markdown from "@/Pages/FrontEndPages/MarkdownPages/Markdown";
// import MarkdownCode from "@/pages/MarkdownPages/MarkdownCode";

// MERN and Auth
import MernAndAuth from "@/Pages/BackEndPages/MERNAuthPages/MernAndAuth";
// import MernAndAuthCode from "@/pages/MERNAuthPages/MernAndAuthCode";

// MongoDB
import MongoDB from "@/Pages/BackEndPages/MongoDBPages/MongoDB";
// import MongoDBCode from "@/pages/MongoDBPages/MongoDBCode";

// Node.js
import Node from "@/Pages/BackEndPages/NodePages/Node";
// import NodeCode from "@/pages/NodePages/NodeCode";

// PostgreSQL
import PostgreSQL from "@/Pages/BackEndPages/PostgreSQLPages/PostgreSQL";
// import PostgreSQLCode from "@/pages/PostgreSQLPages/PostgreSQLCode";

// Python
import Python from "@/Pages/ProgrammingLanguagesPages/PythonPages/Python";
// import PythonCode from "@/pages/PythonPages/PythonCode";

// React and Related Frameworks
import React from "@/Pages/FrontEndPages/ReactPages/React";
// import ReactCode from "@/pages/ReactPages/ReactCode";
import ReactAndTypeScript from "@/Pages/FrontEndPages/ReactPages/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";
import ReactFullStack from "@/Pages/FrontEndPages/ReactPages/ReactFullStack";
// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";
import ReactNative from "@/Pages/FrontEndPages/ReactPages/ReactNative";
// import ReactNativeCode from "@/pages/ReactPages/ReactNativeCode";

// Redux
import Redux from "@/Pages/FrontEndPages/ReduxPages/Redux";
// import ReduxCode from "@/pages/ReduxPages/ReduxCode";

// Servers
import Servers from "@/Pages/BackEndPages/ServerPages/Servers";
// import ServerCode from "@/pages/ServerPages/ServerCode";

// Testing
import Testing from "@/Pages/TestingPages/Testing";
// import TestingCode from "@/pages/TestingPages/TestingCode";
import Vitest from "@/Pages/TestingPages/VitestTesting";
// import VitestCode from "@/pages/TestingPages/VitestTestingCode";

// TypeScript
import TypeScript from "@/Pages/ProgrammingLanguagesPages/TypeScriptPages/TypeScript";
// import TypeScriptCode from "@/pages/TypeScriptPages/TypeScriptCode";

// Vue
import Vue from "@/Pages/FrontEndPages/VuePages/Vue";


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
                path: '/css/vanillacss/basics/intro',
                element: <CSSIntro />,
            },
            {
                path: '/css/vanillacss/basics/selectors',
                element: <CSSSelectors />,
            },
            {
                path: '/css/vanillacss/basics/boxmodel',
                element: <CSSBoxModel />,
            },
            {
                path: '/css/vanillacss/basics/positioning',
                element: <CSSPositioning />,
            },
            {
                path: '/css/vanillacss/layouts/flexbox',
                element: <CSSFlexbox />,
            },
            {
                path: '/css/vanillacss/layouts/grid',
                element: <CSSGrid />,
            },
            {
                path: '/css/vanillacss/advanced/animations',
                element: <Animations />,
            },
            {
                path: '/css/vanillacss/advanced/mediaqueries',
                element: <MediaQueries />,
            },

            {
                path: '/css/vanillacss/advanced/transforms',
                element: <Transform />,
            },
            {
                path: '/css/vanillacss/advanced/transitionsandanimations',
                element: <Transitions />,
            },
            {
                path: '/css/vanillacss/advanced/variables',
                element: <Variables />,
            },
            {
                path: '/css/preprocessors/less/intro',
                element: <LESS />,
            },
            // {
            //     path: '/css/preprocessors/less/syntax',
            //     element: <LESSCode />,
            // },
            {
                path: '/css/postprocessors/overview/whatarepostprocessors',
                element: <WhatArePost />,
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
                path: '/html/basics/introduction',
                element: <HTML />,
            },
            {
                path: '/html/basics/elements',
                element: <HTMLELements />,
            },
            {
                path: '/html/basics/attributes',
                element: <HTMLAttributes />,
            },
            {
                path: '/html/basics/forms',
                element: <HTMLForms />,
            },
            {
                path: '/html/basics/semantic',
                element: <HTMLSemantics />,
            },
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
