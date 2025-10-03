import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/css/tools/postprocessors/postcss/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/css/tools/postprocessors/postcss/basics/fundamentals/install-and-setup"
        }
      ]
    },
    {
      name: "Configuration",
      subpages: [
        {
          name: "postcss.config",
          path: "/css/tools/postprocessors/postcss/basics/configuration/postcss-config"
        },
        {
          name: "Browserslist & Env",
          path: "/css/tools/postprocessors/postcss/basics/configuration/browserslist-and-env"
        }
      ]
    },
    {
      name: "Core Plugins",
      subpages: [
        {
          name: "Autoprefixer",
          path: "/css/tools/postprocessors/postcss/basics/core-plugins/autoprefixer"
        },
        {
          name: "preset-env & Nesting",
          path: "/css/tools/postprocessors/postcss/basics/core-plugins/preset-env-and-nesting"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "CLI & Scripts",
          path: "/css/tools/postprocessors/postcss/basics/workflow/cli-and-scripts"
        },
        {
          name: "Vite & Parcel",
          path: "/css/tools/postprocessors/postcss/basics/workflow/vite-and-parcel"
        }
      ]
    }
  ]
};

export default Basics;