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
import AANavigation from "@/Navigation/BackEndNavigation/AA";

// Frameworks Navigation Start
import DjangoNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/Django";
import ExpressJSNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/ExpressJS";
import FlaskNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/Flask";
import KoaJSNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/KoaJS";
import MERNNavigation from "@/Navigation/BackEndNavigation/FrameworksNavigation/MERN";
import NodeJSNavigation from "./BackEndNavigation/FrameworksNavigation/NodeJS";
import RubyNavigation from "./BackEndNavigation/FrameworksNavigation/Ruby";
import SpringBootNavigation from "./BackEndNavigation/FrameworksNavigation/SpringBoot";
import WebSocketsNavigation from "./BackEndNavigation/FrameworksNavigation/WebSockets";
// Frameworks Navigation End

import GraphQLAndApolloNavigation from "@/Navigation/BackEndNavigation/GraphQLAndApollo";
// Back-End Navigation End

// Programming Languages Navigation Start
import PythonNavigation from "@/Navigation/ProgrammingLanguaguesNavigation/Python";
import RustNavigation from "@/Navigation/ProgrammingLanguaguesNavigation/Rust";
import TypeScriptNavigation from "@/Navigation/ProgrammingLanguaguesNavigation/Typescript";
//

// Testing Navigation Start
import E2ETestingNavigation from "@/Navigation/TestingNavigation/End2EndTesting";
// Testing Navigation End

// Tools Navigation Start
import APIToolsNavigation from "@/Navigation/ToolsNavigation/APITools";
import CICDToolsNavigation from "@/Navigation/ToolsNavigation/CIDCTools";






// Tools Navigation End

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
      GraphQLAndApolloNavigation,
      {
        name: "Servers",
        subpages: [

        ]
      },
      {
        name: "Databases",
        subpages: [

        ],
      },
    ],
  },
  {
    name: "Tools",
    subpages: [APIToolsNavigation, CICDToolsNavigation],
  },
  {
    name: "Testing",
    subpages: [E2ETestingNavigation],
  },
  {
    name: "Programming Languages",
    subpages: [PythonNavigation, RustNavigation, TypeScriptNavigation],
  },
];

export default pages;
