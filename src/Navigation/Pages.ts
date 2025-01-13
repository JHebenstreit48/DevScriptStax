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

// Servers Navigation Start
import ServersGeneralNavigation from "@/Navigation/BackEndNavigation/ServersNavigation/ServersGeneral";
import ApacheNavigation from "@/Navigation/BackEndNavigation/ServersNavigation/Apache";
import NginxNavigation from "@/Navigation/BackEndNavigation/ServersNavigation/Nginx";
// Servers Navigation End

// Back-End Navigation End

// Programming Languages Navigation Start
import PythonNavigation from "@/Navigation/ProgrammingLanguaguesNavigation/Python";
import RustNavigation from "@/Navigation/ProgrammingLanguaguesNavigation/Rust";
import TypeScriptNavigation from "@/Navigation/ProgrammingLanguaguesNavigation/Typescript";
//

// Testing Navigation Start

// End To End Testing Navigation Start
import CypressNavigation from "@/Navigation/TestingNavigation/End2EndTestingNavigation/Cypress";
import PlaywrightNavigation from "@/Navigation/TestingNavigation/End2EndTestingNavigation/Playwright";
// End To End Testing Navigation End

// Framework Testing Navigation Start

// Framework Testing Navigation End
import JestNavigation from "@/Navigation/TestingNavigation/FrameworkTestingNavigation/Jest";
import VitestNavigation from "@/Navigation/TestingNavigation/FrameworkTestingNavigation/Vitest";
// Testing Navigation End

// Tools Navigation Start

// API Tools Navigation Start
import InsomniaNavigation from "@/Navigation/ToolsNavigation/APIToolsNavigation/Insomnia";
import PostmanNavigation from "@/Navigation/ToolsNavigation/APIToolsNavigation/Postman";
// API Tools Navigation End

// CICD Tools Navigation Start
import CircleCINavigation from "@/Navigation/ToolsNavigation/CICDToolsNavigation/CircleCI";
import JenkinsNavigation from "@/Navigation/ToolsNavigation/CICDToolsNavigation/CircleCI";
// CICD Tools Navigation End

// Code Quality Navigation Start
import ESLintNavigation from "@/Navigation/ToolsNavigation/CodeQualityNavigation/ESLint";
import PrettierNavigation from "@/Navigation/ToolsNavigation/CodeQualityNavigation/Prettier";
// Code Quality Navigation End

// Package Management & Bundling Navigation Start
import BabelNavigation from "./ToolsNavigation/PackageManagementAndBundlingNavigation/Babel";
import WebpackNavigation from "./ToolsNavigation/PackageManagementAndBundlingNavigation/WebpackPage";
// Package Management & Bundling Navigation End

// Containerization Navigation Start
import DockerNavigation from "./ToolsNavigation/ContainerizationNavigation/Docker";
import GitNavigation from "./ToolsNavigation/ContainerizationNavigation/Git";
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
        name: "Servers",
        subpages: [ServersGeneralNavigation, NginxNavigation, ApacheNavigation],
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
    name: "Tools",
    subpages: [
      {
        name: "API Tools",
        subpages: [InsomniaNavigation, PostmanNavigation],
      },
      {
        name: "CICD Tools",
        subpages: [CircleCINavigation, JenkinsNavigation],
      },
      {
        name: "Code Quality",
        subpages: [ESLintNavigation, PrettierNavigation],
      },
      {
        name: "Package Management & Bundling",
        subpages: [BabelNavigation, WebpackNavigation],
      },
      {
        name: "Containerization",
        subpages: [DockerNavigation, GitNavigation],
      },
    ],
  },
  {
    name: "Testing",
    subpages: [
      {
        name: "End To End Testing",
        subpages: [CypressNavigation, PlaywrightNavigation],
      },
      {
        name: "Framework Testing",
        subpages: [JestNavigation, VitestNavigation],
      },
    ],
  },
  {
    name: "Programming Languages",
    subpages: [PythonNavigation, RustNavigation, TypeScriptNavigation],
  },
  {
    name: "GraphQL & Apollo",
    subpages: [GraphQLNavigation, ApolloNavigation],
  },
];

export default pages;
