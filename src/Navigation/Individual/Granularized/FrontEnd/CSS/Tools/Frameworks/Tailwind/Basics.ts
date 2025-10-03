import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/css/tools/frameworks/tailwind/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/css/tools/frameworks/tailwind/basics/fundamentals/install-and-setup"
        }
      ]
    },
    {
      name: "Config Basics",
      subpages: [
        {
          name: "tailwind.config",
          path: "/css/tools/frameworks/tailwind/basics/config-basics/tailwind-config"
        },
        {
          name: "Content Paths & JIT",
          path: "/css/tools/frameworks/tailwind/basics/config-basics/content-paths-and-jit"
        }
      ]
    },
    {
      name: "Layout",
      subpages: [
        {
          name: "Container & Breakpoints",
          path: "/css/tools/frameworks/tailwind/basics/layout/container-and-breakpoints"
        },
        {
          name: "Flex & Grid",
          path: "/css/tools/frameworks/tailwind/basics/layout/flex-and-grid"
        }
      ]
    },
    {
      name: "Typography & Color",
      subpages: [
        {
          name: "Typography Utilities",
          path: "/css/tools/frameworks/tailwind/basics/typography-and-color/typography-utilities"
        },
        {
          name: "Colors & Opacity",
          path: "/css/tools/frameworks/tailwind/basics/typography-and-color/colors-and-opacity"
        }
      ]
    },
    {
      name: "Components",
      subpages: [
        {
          name: "Buttons & Forms",
          path: "/css/tools/frameworks/tailwind/basics/components/buttons-and-forms"
        },
        {
          name: "Cards & Nav",
          path: "/css/tools/frameworks/tailwind/basics/components/cards-and-nav"
        }
      ]
    },
    {
      name: "Workflow & DX",
      subpages: [
        {
          name: "CLI & Scripts",
          path: "/css/tools/frameworks/tailwind/basics/workflow-and-dx/cli-and-scripts"
        },
        {
          name: "IntelliSense & Class Order",
          path: "/css/tools/frameworks/tailwind/basics/workflow-and-dx/intellisense-and-class-order"
        }
      ]
    }
  ]
};

export default Basics;