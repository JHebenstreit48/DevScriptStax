import { Subpage } from "@/Navigation/NavigationTypes";

const VanillaNavigation: Subpage = {
  name: "Vanilla CSS",
  subpages: [
    {
      name: "CSS Basics",
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
          name: "Media Queries",
          path: "/css/vanillcss/advanced/mediaqueries",
        },
        {
          name: "CSS Variables",
          path: "/css/vanillacss/advanced/variables",
        },
        {
          name: "Transitions & Animations",
          path: "/css/vanillacss/advanced/transitionsandanimations",
        },
        {
          name: "Transform",
          path: "/css/vanillacss/advanced/transforms",
        },
      ],
    },
  ],
};

export default VanillaNavigation;
