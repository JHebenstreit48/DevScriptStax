import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "What is Babel?",
          path: "/tools/bundling/babel/basics/fundamentals/intro"
        },
        {
          name: "Presets vs Plugins",
          path: "/tools/bundling/babel/basics/fundamentals/presets-plugins"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & CLI",
          path: "/tools/bundling/babel/basics/setup/install-cli"
        },
        {
          name: "Config (.babelrc)",
          path: "/tools/bundling/babel/basics/setup/config"
        }
      ]
    },
    {
      name: "Core Usage",
      subpages: [
        {
          name: "Transpile JS/TS",
          path: "/tools/bundling/babel/basics/core/transpile"
        },
        {
          name: "Polyfills (core-js)",
          path: "/tools/bundling/babel/basics/core/polyfills"
        }
      ]
    }
  ]
};

export default Basics;