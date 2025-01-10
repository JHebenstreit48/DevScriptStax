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
import APINavigation from "@/Navigation/BackEndNavigation/APINavigation";
import AANavigation from "@/Navigation/BackEndNavigation/AA";
import FrameworksNavigation from "@/Navigation/BackEndNavigation/Frameworks";
import GraphQLAndApolloNavigation from "@/Navigation/BackEndNavigation/GraphQLAndApollo";
import ServersNavigation from "@/Navigation/BackEndNavigation/Servers";
import DatabasesNavigation from "@/Navigation/BackEndNavigation/Databases";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Front-End",
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
    name: "Back-End",
    subpages: [
      AANavigation,
      APINavigation,
      FrameworksNavigation,
      GraphQLAndApolloNavigation,
      ServersNavigation,
      DatabasesNavigation,
    ],
  },
  {
    name: "Tools",
    subpages: [],
  },
  {
    name: "Testing",
    subpages: [],
  },
  {
    name: "Programming Languages",
    subpages: [],
  },
];

export default pages;
