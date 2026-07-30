import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/languages/php/basics/fundamentals/intro"
        },
        {
          name: "Setup & Syntax",
          path: "/languages/php/basics/fundamentals/setup-syntax"
        }
      ]
    },
    {
      name: "Control Flow",
      subpages: [
        {
          name: "Conditionals",
          path: "/languages/php/basics/control-flow/conditionals"
        },
        {
          name: "Loops",
          path: "/languages/php/basics/control-flow/loops"
        }
      ]
    },
    {
      name: "Data",
      subpages: [
        {
          name: "Variables & Types",
          path: "/languages/php/basics/data/variables-types"
        },
        {
          name: "Arrays",
          path: "/languages/php/basics/data/arrays"
        }
      ]
    },
    {
      name: "Functions",
      subpages: [
        {
          name: "Basics",
          path: "/languages/php/basics/functions/basics"
        },
        {
          name: "Parameters & Returns",
          path: "/languages/php/basics/functions/parameters-returns"
        }
      ]
    }
  ]
};

export default Basics;