import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const JavaScriptIntermediateNavigation: Subpage = {
  name: "Intermediate",
  subpages: [
    {
      name: "DOM and Events",
      subpages: [
        {
          name: "DOM Manipulation",
          path: "/javascript/intermediate/dom/dommanipulation"
        },
        {
          name: "Event Handling",
          path: "/javascript/intermediate/dom/eventhandling"
        }
      ]
    },
    {
      name: "Modern JavaScript (ES6+)",
      subpages: [
        {
          name: "ES6 Features Overview",
          path: "/javascript/intermediate/es6/features"
        },
        {
          name: "Promises and Async/Await",
          path: "/javascript/intermediate/es6/promisesasync"
        }
      ]
    },
    {
      name: "Error Handling",
      subpages: [
        {
          name: "Try/Catch and Error Types",
          path: "/javascript/intermediate/errors/trycatch"
        }
      ]
    }
  ]
};

export default JavaScriptIntermediateNavigation;
