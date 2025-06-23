import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GatsbyNav: Subpage = {
  name: "Gatsby",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Getting Started",
          path: "/gatsby/basics/gettingstarted", // Combines installation and first project setup
        },
        {
          name: "Project Structure",
          path: "/gatsby/basics/projectstructure", // Explains Gatsby's folder and file setup
        },
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "GraphQL in Gatsby",
          path: "/gatsby/core/graphql", // Details Gatsby's GraphQL data layer
        },
        {
          name: "Gatsby Plugins",
          path: "/gatsby/core/plugins", // Plugins overview and setup
        },
        {
          name: "Layouts & Pages",
          path: "/gatsby/core/layouts", // Covers page creation and layouts
        },
        {
          name: "Static Assets",
          path: "/gatsby/core/assets", // Handling images, fonts, and static files
        },
      ],
    },
    {
      name: "Advanced",
      subpages: [
        {
          name: "SSR & DSG",
          path: "/gatsby/advanced/ssr-dsg", // Covers Server-Side Rendering and Deferred Static Generation
        },
        {
          name: "Performance Optimization",
          path: "/gatsby/advanced/performance", // Techniques for improving performance
        },
        {
          name: "Custom Plugins",
          path: "/gatsby/advanced/custom-plugins", // Building custom plugins
        },
        {
          name: "Security Best Practices",
          path: "/gatsby/advanced/security", // Security considerations for Gatsby sites
        },
      ],
    },
    {
      name: "Deployment",
      subpages: [
        {
          name: "Hosting Options",
          path: "/gatsby/deployment/hosting", // Covers Netlify, Vercel, and other hosting providers
        },
        {
          name: "Build & Deploy",
          path: "/gatsby/deployment/build-deploy", // Steps to build and deploy a Gatsby project
        },
      ],
    },
  ],
};

export default GatsbyNav;
