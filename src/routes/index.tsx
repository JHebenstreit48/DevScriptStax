import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";

// APIs
import APIs from "@/pages/APIPages/API";
import APICode from "@/pages/APIPages/APICode";

// Apollo Server
import ApolloServer from "@/pages/ApolloServerPages/ApolloServer";
import ApolloServerCode from "@/pages/ApolloServerPages/ApolloServerCode";

// Angular
import Angular from "@/pages/AngularPages/Angular";
import AngularCode from "@/pages/AngularPages/AngularCode";

// CICD Ops
import CICDOps from "@/pages/CICDOpsPages/CICDOps";
import CICDOpsCode from "@/pages/CICDOpsPages/CICDOpsCode";

// CSS and Frameworks
import CSS from "@/pages/CSSPages/CSS";
import CSSCode from "@/pages/CSSPages/CSSCode";
import LESS from "@/pages/CSSPages/LESS";
import LESSCode from "@/pages/CSSPages/LESSCode";
import PostCSS from "@/pages/CSSPages/PostCSS";
import PostCSSCode from "@/pages/CSSPages/PostCSSCode";

// Cypress Testing
import Cypress from "@/pages/TestingPages/CypressTesting";
import CypressCode from "@/pages/TestingPages/CypressTestingCode";

// Git
import Git from "@/pages/GitPages/Git";
import GitCode from "@/pages/GitPages/GitCode";

// GraphQL
import GraphQL from "@/pages/GraphQLPages/GraphQL";
import GraphQLCode from "@/pages/GraphQLPages/GraphQLCode";

// HTML
import HTML from "@/pages/HTMLPages/HTML";
import HTMLCode from "@/pages/HTMLPages/HTMLCode";

// JavaScript
import JavaScript from "@/pages/JavaScriptPages/JavaScript";
import JavaScriptCode from "@/pages/JavaScriptPages/JavaScriptCode";

// Markdown
import Markdown from "@/pages/MarkdownPages/Markdown";
import MarkdownCode from "@/pages/MarkdownPages/MarkdownCode";

// MERN and Auth
import MernAndAuth from "@/pages/MERNAuthPages/MernAndAuth";
import MernAndAuthCode from "@/pages/MERNAuthPages/MernAndAuthCode";

// MongoDB
import MongoDB from "@/pages/MongoDBPages/MongoDB";
import MongoDBCode from "@/pages/MongoDBPages/MongoDBCode";

// Node.js
import Node from "@/pages/NodePages/Node";
import NodeCode from "@/pages/NodePages/NodeCode";

// PostgreSQL
import PostgreSQL from "@/pages/PostgreSQLPages/PostgreSQL";
import PostgreSQLCode from "@/pages/PostgreSQLPages/PostgreSQLCode";

// Python
import Python from "@/pages/PythonPages/Python";
import PythonCode from "@/pages/PythonPages/PythonCode";

// React and Related Frameworks
import React from "@/pages/ReactPages/React";
import ReactCode from "@/pages/ReactPages/ReactCode";
import ReactAndTypeScript from "@/pages/ReactPages/ReactAndTypeScript";
import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";
import ReactFullStack from "@/pages/ReactPages/ReactFullStack";
import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";
import ReactNative from "@/pages/ReactPages/ReactNative";
import ReactNativeCode from "@/pages/ReactPages/ReactNativeCode";

// Redux
import Redux from "@/pages/ReduxPages/Redux";
import ReduxCode from "@/pages/ReduxPages/ReduxCode";

// Servers
import Servers from "@/pages/ServerPages/Servers";
import ServerCode from "@/pages/ServerPages/ServerCode";

// Testing
import Testing from "@/pages/TestingPages/Testing";
import TestingCode from "@/pages/TestingPages/TestingCode";
import Vitest from "@/pages/TestingPages/VitestTesting";
import VitestCode from "@/pages/TestingPages/VitestTestingCode";

// TypeScript
import TypeScript from "@/pages/TypeScriptPages/TypeScript";
import TypeScriptCode from "@/pages/TypeScriptPages/TypeScriptCode";

// Vue
import Vue from "@/pages/VuePages/Vue";
import VueCode from "@/pages/VuePages/VueCode";

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
                path: '/angular',
                element: <Angular />,
            },
            {
                path: '/angular/angularcode',
                element: <AngularCode />,
            },
            {
                path: '/apis',
                element: <APIs />,
            },
            {
                path: '/apis/apicode',
                element: <APICode />,
            },
            {
                path: '/apolloserver',
                element: <ApolloServer />,
            },
            {
                path: '/apolloserver/apolloservercode',
                element: <ApolloServerCode />,
            },
            {
                path: '/cicdops',
                element: <CICDOps />,
            },
            {
                path: '/cicdops/cicdopscode',
                element: <CICDOpsCode />,
            },
            {
                path: '/css',
                element: <CSS />,
            },
            {
                path: '/css/csscode',
                element: <CSSCode />,
            },
            {
                path: '/css/less',
                element: <LESS />,
            },
            {
                path: '/css/less/lesscode',
                element: <LESSCode />,
            },
            {
                path: '/css/postcss',
                element: <PostCSS />,
            },
            {
                path: '/css/postcss/postcsscode',
                element: <PostCSSCode />,
            },
            {
                path: '/git',
                element: <Git />,
            },
            {
                path: '/git/gitcode',
                element: <GitCode />,
            },
            {
                path: '/graphql',
                element: <GraphQL />,
            },
            {
                path: '/graphql/graphqlcode',
                element: <GraphQLCode />,
            },
            {
                path: '/html',
                element: <HTML />,
            },
            {
                path: '/html/htmlcode',
                element: <HTMLCode />,
            },
            {
                path: '/javascript',
                element: <JavaScript />,
            },
            {
                path: '/javascript/javascriptcode',
                element: <JavaScriptCode />,
            },
            {
                path: '/markdown',
                element: <Markdown />,
            },
            {
                path: '/markdown/markdowncode',
                element: <MarkdownCode />,
            },
            {
                path: '/mern',
                element: <MernAndAuth />,
            },
            {
                path: '/mern/merncode',
                element: <MernAndAuthCode />,
            },
            {
                path: '/mongodb',
                element: <MongoDB />,
            },
            {
                path: '/mongodb/mongodbcode',
                element: <MongoDBCode />,
            },
            {
                path: '/node',
                element: <Node />,
            },
            {
                path: '/node/nodecode',
                element: <NodeCode />,
            },
            {
                path: '/postgresql',
                element: <PostgreSQL />,
            },
            {
                path: '/postgresql/postgresqlcode',
                element: <PostgreSQLCode />,
            },
            {
                path: '/python',
                element: <Python />,
            },
            {
                path: '/python/pythoncode',
                element: <PythonCode />,
            },
            {
                path: '/react',
                element: <React />,
            },
            {
                path: '/react/reactcode',
                element: <ReactCode />,
            },
            {
                path: '/react/reactandtypescript',
                element: <ReactAndTypeScript />,
            },
            {
                path: '/react/reactandtypescriptcode',
                element: <ReactAndTypeScriptCode />,
            },
            {
                path: '/react/reactfullstack',
                element: <ReactFullStack />,
            },
            {
                path: '/react/reactfullstackcode',
                element: <ReactFullStackCode />,
            },
            {
                path: '/react/reactnative',
                element: <ReactNative />,
            },
            {
                path: '/react/reactnativecode',
                element: <ReactNativeCode />,
            },
            {
                path: '/redux',
                element: <Redux />,
            },
            {
                path: '/redux/reduxcode',
                element: <ReduxCode />,
            },
            {
                path: '/servers',
                element: <Servers />,
            },
            {
                path: '/servers/servercode',
                element: <ServerCode />,
            },
            {
                path: '/testing',
                element: <Testing />,
            },
            {
                path: '/testing/testingcode',
                element: <TestingCode />,
            },
            {
                path: '/testing/cypresstesting',
                element: <Cypress />,
            },
            {
                path: '/testing/cypresstestingcode',
                element: <CypressCode />,
            },
            {
                path: '/testing/vitesttesting',
                element: <Vitest />,
            },
            {
                path: '/testing/vitesttestingcode',
                element: <VitestCode />,
            },
            {
                path: '/typescript',
                element: <TypeScript />,
            },
            {
                path: '/typescript/typescriptcode',
                element: <TypeScriptCode />,
            },
            {
                path: '/vue',
                element: <Vue />,
            },
            {
                path: '/vue/vuecode',
                element: <VueCode />,
            },
        ],
    },
]);    
