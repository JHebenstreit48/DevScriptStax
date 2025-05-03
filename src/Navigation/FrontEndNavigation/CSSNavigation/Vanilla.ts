import { Subpage } from "@/Navigation/NavigationTypes";

const VanillaNavigation: Subpage = {
  name: "Vanilla",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "CSS Intro and Syntax",
          path: "/css/vanillacss/basics/intro",
        },
        {
          name: "Selectors",
          path: "/css/vanillacss/basics/selectors",
        },
        {
          name: "Box Model",
          path: "/css/vanillacss/basics/boxmodel",
        },
        {
          name: "Positioning",
          path: "/css/vanillacss/basics/positioning",
        },
      ],
    },
    {
      name: "Layouts",
      subpages: [
        {
          name: "Flexbox",
          path: "/css/vanillacss/layouts/flexbox",
        },
        {
          name: "Grid",
          path: "/css/vanillacss/layouts/grid",
        },
      ],
    },
    {
      name: "Advanced",
      subpages: [
        {
          name: "Animations",
          path: "/css/vanillacss/advanced/animations",
        },
        {
          name: "Media Queries",
          path: "/css/vanillacss/advanced/mediaqueries",
        },
        {
          name: "Transform",
          path: "/css/vanillacss/advanced/transforms",
        },
        {
          name: "Transitions",
          path: "/css/vanillacss/advanced/transitions",
        },
        {
          name: "Variables",
          path: "/css/vanillacss/advanced/variables",
        },
      ],
    },
  ],
};

export default VanillaNavigation;
