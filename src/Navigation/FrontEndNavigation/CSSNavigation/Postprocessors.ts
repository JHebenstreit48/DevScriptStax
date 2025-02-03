import { Subpage } from "@/Navigation/NavigationTypes";

const PostprocessorsNavigation: Subpage = {
  name: "Postprocessors",
  subpages: [
    {
      name: "Overview & Concepts",
      subpages: [
        {
          name: "What Are Post-Processors?",
          path: "/css/postprocessors/overview/whatarepostprocessors",
        },
        {
          name: "Post vs. Preprocessors",
          path: "/css/postprocessors/overview/comparison",
        },
        {
          name: "Best Practices",
          path: "/css/postprocessors/overview/bestpractices",
        },
      ],
    },
    {
      name: "Tooling & Ecosystem",
      subpages: [
        {
          name: "Popular Tools",
          path: "/css/postprocessors/tools/popular",
        },
        {
          name: "Integration Guides",
          path: "/css/postprocessors/tools/integration",
        },
        {
          name: "Performance Optimization",
          path: "/css/postprocessors/tools/performance",
        },
        {
          name: "Community & Resources",
          path: "/css/postprocessors/tools/community",
        },
      ],
    },
    {
      name: "PostCSS",
      subpages: [
        {
          name: "Introduction & Core Concepts",
          path: "/css/postprocessors/postcss/intro",
        },
        {
          name: "Installation & Setup",
          path: "/css/postprocessors/postcss/setup",
        },
        {
          name: "Configuration Details",
          path: "/css/postprocessors/postcss/configuration",
        },
        {
          name: "Using Existing Plugins",
          path: "/css/postprocessors/postcss/using-plugins",
        },
        {
          name: "Developing Custom Plugins",
          path: "/css/postprocessors/postcss/custom-plugins",
        },
        {
          name: "Advanced Topics",
          path: "/css/postprocessors/postcss/advanced",
        },
        {
          name: "Real-World Use Cases",
          path: "/css/postprocessors/postcss/use-cases",
        },
        {
          name: "Common Pitfalls & Troubleshooting",
          path: "/css/postprocessors/postcss/troubleshooting",
        },
        {
          name: "The Future of PostCSS",
          path: "/css/postprocessors/postcss/future",
        },
      ],
    },
  ],
};

export default PostprocessorsNavigation;
