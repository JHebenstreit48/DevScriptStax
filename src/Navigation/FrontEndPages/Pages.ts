import { Page } from "@/Navigation/FrontEndPages/NavigationTypes";

// Front-End Navigation Start
import AngularNavigation from "@/Navigation/FrontEndPages/Angular";
import CSSNavigation from "@/Navigation/FrontEndPages/CSS";
import GatsbyNavigation from "@/Navigation/FrontEndPages/Gatsby";
import HTMLNavigation from "@/Navigation/FrontEndPages/HTML";
import JavaScriptNavigation from "@/Navigation/FrontEndPages/JavaScript";
import MarkdownNavigation from "@/Navigation/FrontEndPages/Markdown";
import NextJSNavigation from "@/Navigation/FrontEndPages/Nextjs";
import ReactNavigation from "@/Navigation/FrontEndPages/React";
import ReduxNavigation from "@/Navigation/FrontEndPages/Redux";
import SvelteNavigation from "@/Navigation/FrontEndPages/Svelte";
import VueNavigation from "@/Navigation/FrontEndPages/Vue";
// Front-End Navigation End

// Back-End Navigation Start
import APINavigation from "@/Navigation/BackEndPages/APINavigation";
import AANavigation from "../BackEndPages/AA";
import FrameworksNavigation from "../BackEndPages/Frameworks";

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Front-End",
    subpages: [
      CSSNavigation,
      AngularNavigation,
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
    APINavigation, AANavigation, FrameworksNavigation], // Include Backend subpages here
  },
  // {
  //   name: "Tools",
  //   subpages: [ToolsNavigation], // Tools-related subpages
  // },
  // {
  //   name: "Programming Languages",
  //   subpages: [ProgrammingLanguagesNavigation], // Include programming language subpages
  // },
];

export default pages;
