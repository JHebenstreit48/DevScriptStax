import { Page } from "@/Navigation/NavigationTypes";

// Front-End Navigation Start
import AngularNavigation from "@/Navigation/FrontEndNavigation/Angular";
import CSSNavigation from "@/Navigation/FrontEndNavigation/CSS";
import GatsbyNavigation from "@/Navigation/FrontEndNavigation/Gatsby";
import HTMLNavigation from "@/Navigation/FrontEndNavigation/HTML";
import JavaScriptNavigation from "@/Navigation/FrontEndNavigation/JavaScript";
import MarkdownNavigation from "@/Navigation/FrontEndNavigation/Markdown";
import NextJSNavigation from "@/Navigation/FrontEndNavigation/Nextjs";
import ReactNavigation from "@/Navigation/FrontEndNavigation/React";
import ReduxNavigation from "@/Navigation/FrontEndNavigation/Redux";
import SvelteNavigation from "@/Navigation/FrontEndNavigation/Svelte";
import VueNavigation from "@/Navigation/FrontEndNavigation/Vue";
import ViteNavigation from "@/Navigation/FrontEndNavigation/Vite"; // Added Vite
// Front-End Navigation End

// Back-End Navigation Start
import APINavigation from "@/Navigation/BackEndNavigation/API";
import AANavigation from "@/Navigation/BackEndNavigation/AuthenticationAndAuthorization";

// Databases Navigation Start
import FirebaseNavigation from "@/Navigation/BackEndNavigation/DatabaseNavigation/Firebase";
import MongoDBNavigation from "@/Navigation/BackEndNavigation/DatabaseNavigation/MongoDB";
import MySQLNavigation from "@/Navigation/BackEndNavigation/DatabaseNavigation/MySQL";
import PostgreSQLNavigation from "@/Navigation/BackEndNavigation/DatabaseNavigation/PostgreSQL";
import RedisNavigation from "@/Navigation/BackEndNavigation/DatabaseNavigation/Redis";
import SQLiteNavigation from "@/Navigation/BackEndNavigation/DatabaseNavigation/SQLite";
// Databases Navigation End

// Frameworks Navigation Start
import DjangoNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/Django";
import ExpressJSNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/ExpressJS";
import FlaskNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/Flask";
import KoaJSNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/KoaJS";
import MERNNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/MERN";
import NodeJSNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/NodeJS";
import RubyNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/Ruby";
import SpringBootNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/SpringBoot";
import WebSocketsNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/WebSockets";
// Frameworks Navigation End

// Web Servers Navigation Start
import ServersGeneralNavigation from "@/Navigation/BackEndNavigation/WebServersNavigation/ServersGeneral";
import ApacheNavigation from "@/Navigation/BackEndNavigation/WebServersNavigation/Apache";
import NginxNavigation from "@/Navigation/BackEndNavigation/WebServersNavigation/Nginx";
// Web Servers Navigation End

// Back-End Navigation End

// Cloud Services Navigation Start
// import AWSLambdaNavigation from "@/Navigation/CloudServicesNavigation/AWSLambda";
// import GoogleCloudFunctionsNavigation from "@/Navigation/CloudServicesNavigation/GoogleCloudFunctions";
// import AzureFunctionsNavigation from "@/Navigation/CloudServicesNavigation/AzureFunctions";
// import FirebaseCloudNavigation from "@/Navigation/CloudServicesNavigation/FirebaseCloud";
// import CloudflareWorkersNavigation from "@/Navigation/CloudServicesNavigation/CloudflareWorkers";
// import ServerlessFrameworkNavigation from "@/Navigation/CloudServicesNavigation/ServerlessFramework";
// import NetlifyFunctionsNavigation from "@/Navigation/CloudServicesNavigation/NetlifyFunctions";
// import VercelFunctionsNavigation from "@/Navigation/CloudServicesNavigation/VercelFunctions";
// Cloud Services Navigation End

// Programming Languages Navigation Start
import PythonNavigation from "@/Navigation/ProgrammingLanguagesNavigation/Python";
import RustNavigation from "@/Navigation/ProgrammingLanguagesNavigation/Rust";
import TypeScriptNavigation from "@/Navigation/ProgrammingLanguagesNavigation/Typescript";
// import GoNavigation from "@/Navigation/ProgrammingLanguagesNavigation/Go";
// import DartNavigation from "@/Navigation/ProgrammingLanguagesNavigation/Dart";
// Programming Languages Navigation End

// Testing Navigation Start

// End To End Testing Navigation Start
import CypressNavigation from "@/Navigation/TestingNavigation/End2EndTestingNavigation/Cypress";
import PlaywrightNavigation from "@/Navigation/TestingNavigation/End2EndTestingNavigation/Playwright";
// End To End Testing Navigation End

// Framework Testing Navigation Start
import JestNavigation from "@/Navigation/TestingNavigation/FrameworkTestingNavigation/Jest";
import VitestNavigation from "@/Navigation/TestingNavigation/FrameworkTestingNavigation/Vitest";
// import MochaNavigation from "@/Navigation/TestingNavigation/FrameworkTestingNavigation/Mocha"; // Added Mocha
// Framework Testing Navigation End

// Unit Testing Navigation Start
// import PytestNavigation from "@/Navigation/TestingNavigation/UnitTestingNavigation/Pytest";
// import RSpecNavigation from "@/Navigation/TestingNavigation/UnitTestingNavigation/RSpec";
// import PHPUnitNavigation from "@/Navigation/TestingNavigation/UnitTestingNavigation/PHPUnit";
// import TestifyNavigation from "@/Navigation/TestingNavigation/UnitTestingNavigation/Testify";
// Unit Testing Navigation End

// Testing Navigation End

// Tools Navigation Start

// API Tools Navigation Start
import InsomniaNavigation from "@/Navigation/ToolsNavigation/APIToolsNavigation/Insomnia";
import PostmanNavigation from "@/Navigation/ToolsNavigation/APIToolsNavigation/Postman";
// API Tools Navigation End

// CICD Tools Navigation Start
import CircleCINavigation from "@/Navigation/ToolsNavigation/CICDToolsNavigation/CircleCI";
import JenkinsNavigation from "@/Navigation/ToolsNavigation/CICDToolsNavigation/Jenkins";
// CICD Tools Navigation End

// Code Quality Navigation Start
import ESLintNavigation from "@/Navigation/ToolsNavigation/CodeQualityNavigation/ESLint";
import PrettierNavigation from "@/Navigation/ToolsNavigation/CodeQualityNavigation/Prettier";
// import TSLintNavigation from "@/Navigation/ToolsNavigation/CodeQualityNavigation/TSLint";
// import StandardJSNavigation from "@/Navigation/ToolsNavigation/CodeQualityNavigation/StandardJS";
// Code Quality Navigation End

// Package Management & Bundling Navigation Start
import BabelNavigation from "@/Navigation/ToolsNavigation/PackageManagementAndBundlingNavigation/Babel";
import WebpackNavigation from "@/Navigation/ToolsNavigation/PackageManagementAndBundlingNavigation/WebpackPage";
// Package Management & Bundling Navigation End

// Containerization Navigation Start
import DockerNavigation from "@/Navigation/ToolsNavigation/ContainerizationNavigation/Docker";
import GitNavigation from "@/Navigation/ToolsNavigation/ContainerizationNavigation/Git";
// Containerization Navigation End

// Tools Navigation End

// GraphQL & Apollo Navigation Start
import GraphQLNavigation from "@/Navigation/GraphQLAndApolloNavigation/GraphQLPages";
import ApolloNavigation from "@/Navigation/GraphQLAndApolloNavigation/Apollo";
// GraphQL & Apollo Navigation End

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Front End",
    subpages: [
      AngularNavigation,
      CSSNavigation,
      GatsbyNavigation,
      HTMLNavigation,
      JavaScriptNavigation,
      MarkdownNavigation,
      NextJSNavigation,
      ReactNavigation,
      ReduxNavigation,
      SvelteNavigation,
      VueNavigation,
      ViteNavigation // Modern Build Tool
    ],
  },
  {
    name: "Back End",
    subpages: [
      AANavigation,
      APINavigation,
      {
        name: "Frameworks",
        subpages: [
          DjangoNavigation,
          ExpressJSNavigation,
          FlaskNavigation,
          KoaJSNavigation,
          MERNNavigation,
          NodeJSNavigation,
          RubyNavigation,
          SpringBootNavigation,
          WebSocketsNavigation,
        ],
      },
      {
        name: "Web Servers",
        subpages: [
          ServersGeneralNavigation,
          NginxNavigation,
          ApacheNavigation,
        ],
      },
      {
        name: "Databases",
        subpages: [
          FirebaseNavigation,
          MongoDBNavigation,
          MySQLNavigation,
          PostgreSQLNavigation,
          RedisNavigation,
          SQLiteNavigation,
        ],
      },
    ],
  },
  {
    name: "Cloud Services",
    subpages: [
      {
        name: "Serverless Computing",
        subpages: [
          // AWSLambdaNavigation,
          // GoogleCloudFunctionsNavigation,
          // AzureFunctionsNavigation,
          // FirebaseCloudNavigation,
        ],
      },
      {
        name: "Edge Computing",
        subpages: [
          // CloudflareWorkersNavigation,
        ],
      },
      {
        name: "Frameworks",
        subpages: [
          // ServerlessFrameworkNavigation,
        ],
      },
      {
        name: "Full-Stack Tools",
        subpages: [
          // NetlifyFunctionsNavigation,
          // VercelFunctionsNavigation,
        ],
      },
    ],
  },
  {
    name: "Testing",
    subpages: [
      {
        name: "End To End Testing",
        subpages: [
          CypressNavigation,
          PlaywrightNavigation,
        ],
      },
      {
        name: "Framework Testing",
        subpages: [
          JestNavigation,
          VitestNavigation,
          // MochaNavigation,
        ],
      },
      {
        name: "Unit Testing",
        subpages: [
          // PytestNavigation,
          // RSpecNavigation,
          // PHPUnitNavigation,
          // TestifyNavigation,
        ],
      },
    ],
  },
  {
    name: "Tools",
    subpages: [
      {
        name: "API Tools",
        subpages: [
          InsomniaNavigation,
          PostmanNavigation,
        ],
      },
      {
        name: "CICD Tools",
        subpages: [
          CircleCINavigation,
          JenkinsNavigation,
        ],
      },
      {
        name: "Code Quality",
        subpages: [
          ESLintNavigation,
          PrettierNavigation,
          // TSLintNavigation,
          // StandardJSNavigation,
        ],
      },
      {
        name: "Package Management & Bundling",
        subpages: [
          BabelNavigation,
          WebpackNavigation,
        ],
      },
      {
        name: "Containerization",
        subpages: [
          DockerNavigation,
          GitNavigation,
        ],
      },
    ],
  },
  {
    name: "Web Languages",
    subpages: [
      PythonNavigation,
      RustNavigation,
      TypeScriptNavigation,
      // GoNavigation,
      // DartNavigation,
    ],
  },
  {
    name: "GraphQL & Apollo",
    subpages: [
      GraphQLNavigation,
      ApolloNavigation,
    ],
  },
];

export default pages;
