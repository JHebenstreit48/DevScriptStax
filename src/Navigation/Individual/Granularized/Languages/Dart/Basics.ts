import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/dart/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/dart/basics/fundamentals/install-setup"
        }
      ]
    },
    {
      name: "Language",
      subpages: [
        {
          name: "Syntax",
          path: "/dart/basics/language/syntax"
        },
        {
          name: "Types",
          path: "/dart/basics/language/types"
        }
      ]
    },
    {
      name: "Control Flow",
      subpages: [
        {
          name: "Conditionals",
          path: "/dart/basics/control/conditionals"
        },
        {
          name: "Loops",
          path: "/dart/basics/control/loops"
        }
      ]
    },
    {
      name: "Functions",
      subpages: [
        {
          name: "Basics",
          path: "/dart/basics/functions/basics"
        },
        {
          name: "Params & Arrow",
          path: "/dart/basics/functions/params-arrow"
        }
      ]
    },
    {
      name: "Collections",
      subpages: [
        {
          name: "Lists & Sets",
          path: "/dart/basics/collections/lists-sets"
        },
        {
          name: "Maps",
          path: "/dart/basics/collections/maps"
        }
      ]
    },
    {
      name: "Null Safety",
      subpages: [
        {
          name: "Concepts",
          path: "/dart/basics/null-safety/concepts"
        },
        {
          name: "Definite Assign",
          path: "/dart/basics/null-safety/definite-assign"
        }
      ]
    },
    {
      name: "OOP",
      subpages: [
        {
          name: "Classes",
          path: "/dart/basics/oop/classes"
        },
        {
          name: "Mixins & Abstract",
          path: "/dart/basics/oop/mixins-abstract"
        }
      ]
    }
  ]
};

export default Basics;