import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";
import Angular from "@/pages/AngularPages/Angular";
import AngularCode from "@/pages/AngularPages/AngularCode";
import APIs from "@/pages/API";
import APICode from "@/pages/APICode";
import CICDOpsCode from "@/pages/CICDOpsCode";
import CICDOps from "@/pages/CICDOps";
import CSS from "@/pages/CSSPages/CSS";
import CSSCode from "@/pages/CSSPages/CSSCode";
import Cypress from "@/pages/CypressTesting";
import CypressCode from "@/pages/CypressTestingCode";
import Git from "@/pages/Git";
import GitCode from "@/pages/GitCode";
import HTML from "@/pages/HTML";
import HTMLCode from "@/pages/HTMLCode";
import JavaScript from "@/pages/JavaScript";
import JavascriptCode from "@/pages/JavaScriptCode";
import MernAndAuth from "@/pages/MernAndAuth";
import MernAndAuthCode from "@/pages/MernAndAuthCode";
import MongoDB from "@/pages/MongoDB";
import MongoDBCode from "@/pages/MongoDBCode";
import Node from "@/pages/Node";
import NodeCode from "@/pages/NodeCode";
import PostgreSQL from "@/pages/PostgreSQL";
import PostgreSQLCode from "@/pages/PostgreSQLCode";
import Python from "@/pages/Python";
import PythonCode from "@/pages/PythonCode";
import React from "@/pages/React";
import ReactCode from "@/pages/ReactCode";
import ReactAndTypeScript from "@/pages/ReactandTypeScript";
import ReactAndTypeScriptCode from "@/pages/ReactAndTypeScriptCode";
import ReactFullStack from "@/pages/ReactFullStack";
import ReactFullStackCode from "@/pages/ReactFullStackCode";
import ReactNative from "@/pages/ReactNative";
import ReactNativeCode from "@/pages/ReactNativeCode";
import Redux from "@/pages/Redux";
import ReduxCode from "@/pages/ReduxCode";
import Servers from "@/pages/Servers";
import ServerCode from "@/pages/ServerCode";
import Testing from "@/pages/Testing";
import TestingCode from "@/pages/TestingCode";
import TypeScript from "@/pages/TypeScript";
import TypeScriptCode from "@/pages/TypeScriptCode";
import Vitest from "@/pages/VitestTesting";
import VitestCode from "@/pages/VitestTestingCode";
import Vue from "@/pages/Vue";
import VueCode from "@/pages/VueCode";
import Markdown from "@/pages/Markdown";
import MarkdownCode from "@/pages/MarkdownCode";
import ApolloServer from "@/pages/ApolloServer";
import ApolloServerCode from "@/pages/ApolloServerCode";
import GraphQL from "@/pages/GraphQL";
import GraphQLCode from "@/pages/GraphQLCode";
import LESS from "@/pages/CSSPages/LESS";
// import LESSCode from "@/pages/CSSPages/LessCode";
import PostCSSCode from "@/pages/PostCSSCode";
import PostCSS from "@/pages/PostCSS";

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
                // element: <LESSCode />,
            },
            {
                path: '/css/postcss',
                element: <PostCSS />,
            },
            {
                path: '/css/postcss/postcsscode',
                element: <PostCSSCode />,
            },
            {},
            {},
            {},
            {},
            {},
            {},
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
                element: <JavascriptCode />,
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
                element: <Node />
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
