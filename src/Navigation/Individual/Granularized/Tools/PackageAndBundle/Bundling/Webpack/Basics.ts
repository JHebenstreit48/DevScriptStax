import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "What is Webpack?",
          path: "/tools/bundling/webpack/basics/fundamentals/intro"
        },
        {
          name: "Key Concepts",
          path: "/tools/bundling/webpack/basics/fundamentals/concepts"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Init",
          path: "/tools/bundling/webpack/basics/setup/install-init"
        },
        {
          name: "webpack.config.js",
          path: "/tools/bundling/webpack/basics/setup/config"
        }
      ]
    },
    {
      name: "Core Build",
      subpages: [
        {
          name: "Entry & Output",
          path: "/tools/bundling/webpack/basics/core/entry-output"
        },
        {
          name: "Loaders",
          path: "/tools/bundling/webpack/basics/core/loaders"
        }
      ]
    },
    {
      name: "Plugins",
      subpages: [
        {
          name: "Common Plugins",
          path: "/tools/bundling/webpack/basics/plugins/common"
        },
        {
          name: "HTML & Assets",
          path: "/tools/bundling/webpack/basics/plugins/html-assets"
        }
      ]
    }
  ]
};

export default Basics;