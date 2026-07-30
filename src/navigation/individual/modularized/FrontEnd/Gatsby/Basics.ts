import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Getting Started",
          path: "/gatsby/basics/fundamentals/getting-started"
        },
        {
          name: "Project Structure",
          path: "/gatsby/basics/fundamentals/project-structure"
        },
        {
          name: "CLI & Workflow",
          path: "/gatsby/basics/fundamentals/cli-and-workflow"
        }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "GraphQL Data Layer",
          path: "/gatsby/basics/core-concepts/graphql-data-layer"
        },
        {
          name: "File Routing & Pages",
          path: "/gatsby/basics/core-concepts/file-routing-and-pages"
        },
        {
          name: "Layouts & Head API",
          path: "/gatsby/basics/core-concepts/layouts-and-head-api"
        }
      ]
    },
    {
      name: "Assets & Styling",
      subpages: [
        {
          name: "Images (gatsby-plugin-image)",
          path: "/gatsby/basics/assets-styling/images"
        },
        {
          name: "Static Assets",
          path: "/gatsby/basics/assets-styling/static-assets"
        },
        {
          name: "Styling Options",
          path: "/gatsby/basics/assets-styling/styling-options"
        }
      ]
    },
    {
      name: "Config & Plugins",
      subpages: [
        {
          name: "gatsby-config.js",
          path: "/gatsby/basics/config-plugins/gatsby-config"
        },
        {
          name: "Using Plugins",
          path: "/gatsby/basics/config-plugins/using-plugins"
        }
      ]
    }
  ]
};

export default Basics;