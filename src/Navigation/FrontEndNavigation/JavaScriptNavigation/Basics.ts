import { Subpage } from "@/Navigation/NavigationTypes";

const JavaScriptBasicsNavigation: Subpage = {
  name: "JavaScript Basics",
  subpages: [
    {
      name: "Introduction",
      subpages: [
        {
          name: "Overview of JavaScript",
          path: "/javascript/basics/intro/overview"
        },
        {
          name: "History of JavaScript",
          path: "/javascript/basics/intro/history"
        }
      ]
    },
    {
      name: "Core Language Concepts",
      subpages: [
        {
          name: "Syntax and Structure",
          path: "/javascript/basics/core/syntax"
        },
        {
          name: "Data Types",
          path: "/javascript/basics/core/datatypes"
        },
        {
          name: "Variables (var, let, const)",
          path: "/javascript/basics/core/variables"
        },
        {
          name: "Operators",
          path: "/javascript/basics/core/operators"
        }
      ]
    },
    {
      name: "Functions",
      subpages: [
        {
          name: "Function Declarations",
          path: "/javascript/basics/functions/declarations"
        },
        {
          name: "Function Expressions",
          path: "/javascript/basics/functions/expressions"
        },
        {
          name: "Arrow Functions",
          path: "/javascript/basics/functions/arrowfunctions"
        },
        {
          name: "Parameters and Arguments",
          path: "/javascript/basics/functions/parametersarguments"
        }
      ]
    }
  ]
};

export default JavaScriptBasicsNavigation;
