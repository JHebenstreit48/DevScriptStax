import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Syntax",
          path: "/go/basics/fundamentals/syntax"
        },
        {
          name: "Control Flow",
          path: "/go/basics/fundamentals/control-flow"
        },
        {
          name: "Functions & Packages",
          path: "/go/basics/fundamentals/functions-packages"
        }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "Variables & Types",
          path: "/go/basics/core-concepts/variables-types"
        },
        {
          name: "Structs & Interfaces",
          path: "/go/basics/core-concepts/structs-interfaces"
        },
        {
          name: "Concurrency Intro",
          path: "/go/basics/core-concepts/concurrency-intro"
        }
      ]
    },
    {
      name: "Collections",
      subpages: [
        {
          name: "Arrays & Slices",
          path: "/go/basics/collections/arrays-slices"
        },
        {
          name: "Maps",
          path: "/go/basics/collections/maps"
        }
      ]
    }
  ]
};

export default Basics;