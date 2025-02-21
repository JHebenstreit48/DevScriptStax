import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";

// APIs Start

// API Introduction Start
import CoreConcepts from "@/Pages/BackEndPages/APIPages/APIFundamentals/CoreAPIConcepts";
// API Introduction End

// Types of APIs Start
import PublicVPrivate from "@/Pages/BackEndPages/APIPages/TypesOfAPIs/PubVSPrivate";
import RESTVSGraphQLVSSOAP from "@/Pages/BackEndPages/APIPages/TypesOfAPIs/RestVSGraphVSSOAP";
// Types of APIs End

// APIs End

// Apollo Server
import ApolloServer from "@/Pages/BackEndPages/ApolloServerPages/ApolloServer";
// import ApolloServerCode from "@/pages/ApolloServerPages/ApolloServerCode";

// Angular Notes Start

// Angular Basics Start
// Angular Getting Started Start
import AngularIntro from "@/Pages/FrontEndPages/AngularPages/Basics/GettingStarted/Introduction";
import AngularAppCreate from "@/Pages/FrontEndPages/AngularPages/Basics/GettingStarted/CreatingRunningApp";
import AngularCLI from "@/Pages/FrontEndPages/AngularPages/Basics/GettingStarted/CLI";
// Angular Getting Started End

// Angular Project Structure Start
import AngularStructure from "@/Pages/FrontEndPages/AngularPages/Basics/ProjectStructure/FolderFileStructure";
import AngularConfigFiles from "@/Pages/FrontEndPages/AngularPages/Basics/ProjectStructure/ConfigurationFiles";
// Angular Project Structure End
// Angular Basics End

// Angular Core Concepts Start
import Components from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularComponents";
import Modules from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularModules";
import Services from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularServices";
import Routing from "@/Pages/FrontEndPages/AngularPages/CoreConcepts/AngularRouting";
// Angular Core Concepts End


// Angular Notes End

// CICD Ops
import CICDOps from "@/Pages/ToolsPages/CICDOpsPages/CICDOps";
// import CICDOpsCode from "@/pages/CICDOpsPages/CICDOpsCode";

// CSS Start

// CSS Frameworks Start

// CSS Bootstrap Start

// Bootstrap Getting Started Start
import BootstrapIntro from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapIntro";
import BootstrapGrid from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapGrid";
import BootstrapTypography from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapTypography";
import BootstrapUtilities from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/GettingStarted/BootstrapUtilities";
// Bootstrap Getting Started End

// Bootstrap Components Start
import BootstrapAccordions from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Accordions";
import BootstrapAlerts from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Alerts";
import BootstrapButtons from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Buttons";
import BootstrapCards from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Cards";
import BootstrapCarousel from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Carousel";
import BootstrapDropdowns from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Dropdowns";
import BootstrapModals from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Modals";
import BootstrapTooltips from "@/Pages/FrontEndPages/CSSPages/CSSFrameworksPages/Bootstrap/BootstrapComponents/Tooltips";
// Bootstrap Components End

// CSS Bootstrap End

// CSS Frameworks End

// CSS Preprocessors Start

// LESS Start
import LESS from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/LESSPages/LESS";
// import LESSCode from "@/pages/CSSPages/LESSCode";
// LESS End

// Sass Start
import SassIntro from "@/Pages/FrontEndPages/CSSPages/CSSPreprocessorsPages/SassPages/SassIntro";

// Sass End


// CSS Preprocessors End

// CSS Postprocessors Start
import WhatArePost from "@/Pages/FrontEndPages/CSSPages/CSSPostprocessorsPages/PostCSS";
// import PostCSSCode from "@/pages/CSSPages/PostCSSCode";

// CSS Preprocessors End

// CSS Vanilla Start
import CSSIntro from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSIntro";
import CSSSelectors from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSSelectors";
import CSSBoxModel from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSBoxModel";
import CSSPositioning from "@/Pages/FrontEndPages/CSSPages/CSSVanillaPages/CSSBasics/CSSPositioning";
// CSS Vanilla End

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

// CSS Vanilla End

// CSS End

// Cypress Testing
import Cypress from "@/Pages/TestingPages/CypressTesting";
// import CypressCode from "@/pages/TestingPages/CypressTestingCode";

// Git
import Git from "@/Pages/ToolsPages/GitPages/Git";
// import GitCode from "@/pages/GitPages/GitCode";

// GraphQL
import GraphQL from "@/Pages/GraphQLPages/GraphQL";
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
import MernAndAuth from "@/Pages/BackEndPages/FrameworksPages/MERNAuthPages/MernAndAuth";
// import MernAndAuthCode from "@/pages/MERNAuthPages/MernAndAuthCode";

// MongoDB
import MongoDB from "@/Pages/BackEndPages/DatabasesPages/MongoDBPages/MongoDB";
// import MongoDBCode from "@/pages/MongoDBPages/MongoDBCode";

// Node.js
import Node from "@/Pages/BackEndPages/FrameworksPages/NodePages/Node";
// import NodeCode from "@/pages/NodePages/NodeCode";

// PostgreSQL
import PostgreSQL from "@/Pages/BackEndPages/DatabasesPages/PostgreSQLPages/PostgreSQL";
// import PostgreSQLCode from "@/pages/PostgreSQLPages/PostgreSQLCode";

// Python
import Python from "@/Pages/ProgrammingLanguagesPages/PythonPages/Python";
// import PythonCode from "@/pages/PythonPages/PythonCode";

// React and Related Frameworks
import React from "@/Pages/FrontEndPages/ReactPages/ReactBasics/IntroAndSetup";
// import ReactCode from "@/pages/ReactPages/ReactCode";
import ReactAndTypeScript from "@/Pages/FrontEndPages/ReactPages/ReactAndTypeScript/ReactAndTypeScript";
// import ReactAndTypeScriptCode from "@/pages/ReactPages/ReactAndTypeScriptCode";
import ReactFullStack from "@/Pages/FrontEndPages/ReactPages/ReactFullStack/ReactFullStack";
// import ReactFullStackCode from "@/pages/ReactPages/ReactFullStackCode";
import ReactNative from "@/Pages/FrontEndPages/ReactPages/ReactNative/ReactNative";
// import ReactNativeCode from "@/pages/ReactPages/ReactNativeCode";

// Redux
import Redux from "@/Pages/FrontEndPages/ReduxPages/Redux";
// import ReduxCode from "@/pages/ReduxPages/ReduxCode";

// Servers
import Servers from "@/Pages/BackEndPages/WebServersPages/ServerPages/Servers";
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
            // Angular Start
            // Angular Basics Start
            // Getting Started Start
            {
                path: '/angular/basics/gettingstarted/intro',
                element: <AngularIntro />,
            },
            {
                path: '/angular/basics/gettingstarted/creatingrunning',
                element: <AngularAppCreate />,
            },
            {
                path: '/angular/basics/gettingstarted/angularcli',
                element: <AngularCLI />,
            },
            // Getting Started End

            // Project Structure Start
            {
                path: '/angular/basics/projectstructure/folderfilestructure',
                element: <AngularStructure />,
            },
            {
                path: '/angular/basics/projectstructure/configfiles',
                element: <AngularConfigFiles />,
            },
            // Project Structure End
            // Angular Basics End
            {
                path: '/angular/coreconcepts/components',
                element: <Components />,
            },
            {
                path: '/angular/coreconcepts/modules',
                element: <Modules />,
            },
            {
                path: '/angular/coreconcepts/services',
                element: <Services />,
            },
            {
                path: '/angular/coreconcepts/routing',
                element: <Routing />,
            },
            // Angular End
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

            // CSS Frameworks Start

            // Bootstrap Start

            // Bootstrap Getting Started Start
            {
                path: '/css/frameworks/bootstrap/gettingstarted/intro',
                element: <BootstrapIntro />,
            },
            {
                path: '/css/frameworks/bootstrap/gettingstarted/grid',
                element: <BootstrapGrid />,
            },
            {
                path: '/css/frameworks/bootstrap/gettingstarted/typography',
                element: <BootstrapTypography />,
            },
            {
                path: '/css/frameworks/bootstrap/gettingstarted/utilities',
                element: <BootstrapUtilities />,
            },
            // Bootstrap Getting Started End

            // Bootstrap Components Start
            {
                path: '/css/frameworks/bootstrap/components/accordions',
                element: <BootstrapAccordions />,
            },
            {
                path: '/css/frameworks/bootstrap/components/alerts',
                element: <BootstrapAlerts />,
            },
            {
                path: '/css/frameworks/bootstrap/components/buttons',
                element: <BootstrapButtons />,
            },
            {
                path: '/css/frameworks/bootstrap/components/cards',
                element: <BootstrapCards />,
            },
            {
                path: '/css/frameworks/bootstrap/components/carousel',
                element: <BootstrapCarousel />,
            },
            {
                path: '/css/frameworks/bootstrap/components/dropdowns',
                element: <BootstrapDropdowns />,
            },
            {
                path: '/css/frameworks/bootstrap/components/modals',
                element: <BootstrapModals />,
            },
            {
                path: '/css/frameworks/bootstrap/components/tooltips',
                element: <BootstrapTooltips />,
            },
            // Bootstrap Components End

            // Bootstrap End

            // CSS Frameworks End

            // CSS Preprocessors Start

            // LESS Start
            {
                path: '/css/preprocessors/less/gettingstarted/intro',
                element: <LESS />,
            },
            // {
            //     path: '/css/preprocessors/less/syntax',
            //     element: <LESSCode />,
            // },

            // LESS End

            // Sass Start
            {
                path: '/css/preprocessors/sass/gettingstarted/intro',
                element: <SassIntro />,
            },


            // Sass End

            // CSS Preprocessors End

            // CSS Vanilla Start
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

            // CSS Vanilla End

            // CSS End
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
