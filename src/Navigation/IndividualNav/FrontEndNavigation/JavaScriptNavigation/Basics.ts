import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const JavaScriptBasicsNavigation: Subpage = {
  name: "Basics",
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
      name: "Arrays",
      subpages: [
        {
          name: "Introduction to Arrays",
          path: "/javascript/basics/arrays/intro"
        },
        {
          name: "Common Array Methods",
          path: "/javascript/basics/arrays/methods"
        },
        {
          name: "Advanced Array Techniques", // reduce, sort, slice, etc.
          path: "/javascript/basics/arrays/advanced"
        }
      ]
    },
    {
      name: "Objects and JSON",
      subpages: [
        {
          name: "Introduction to Objects",
          path: "/javascript/basics/objects/intro"
        },
        {
          name: "Object Properties and Methods",
          path: "/javascript/basics/objects/propertiesmethods"
        },
        {
          name: "Object Utilities and Patterns", // ← NEW
          path: "/javascript/basics/objects/utilities"
        },
        {
          name: "Working with JSON",
          path: "/javascript/basics/objects/json"
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
