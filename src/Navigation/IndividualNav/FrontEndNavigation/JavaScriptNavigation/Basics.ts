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
        },
        {
          name: "Built-in Methods",
          path: "/javascript/basics/core/methods"
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
          name: "Objects Basics",
          path: "/javascript/basics/objects/basics"
        },
        {
          name: "Properties and Methods",
          path: "/javascript/basics/objects/propsandmethods"
        },
        {
          name: "Utilities and Patterns", // ← NEW
          path: "/javascript/basics/objects/utilsandpatterns"
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
          name: "Basics & Declarations",
          path: "/javascript/basics/functions/basicsanddeclare"
        },
        {
          name: "Expressions & IIFE",
          path: "/javascript/basics/functions/expressionsandiife"
        },
        {
          name: "Arrow Functions",
          path: "/javascript/basics/functions/arrowfunctions"
        },
        {
          name: "Parameters and Arguments",
          path: "/javascript/basics/functions/paramsandargs"
        },
        {
          name: "Higher-Order Functions",
          path: "/javascript/basics/functions/higherorder"
        }
      ]
    }
  ]
};

export default JavaScriptBasicsNavigation;
