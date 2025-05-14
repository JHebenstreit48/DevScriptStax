import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ViteNavigation: Subpage = {
  name: "Vite",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Introduction", path: "/vite/basics/introduction" }, // Overview of Vite and its purpose
        { name: "Setup", path: "/vite/basics/setup" }, // Installing and initializing a Vite project
        { name: "Configuration", path: "/vite/basics/configuration" }, // Basic Vite configuration
      ],
    },
    {
      name: "Core Features",
      subpages: [
        { name: "Hot Module Replacement", path: "/vite/corefeatures/hmr" }, // Explanation of HMR
        { name: "Plugins", path: "/vite/corefeatures/plugins" }, // How to use and create plugins
        { name: "Environment Variables", path: "/vite/corefeatures/envvariables" }, // Using .env files
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "SSR (Server-Side Rendering)", path: "/vite/advanced/ssr" }, // Vite for SSR
        { name: "Custom Build Config", path: "/vite/advanced/custombuild" }, // Customizing build steps
        { name: "Optimizing Dependencies", path: "/vite/advanced/optimization" }, // Dependency pre-bundling and optimization
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Performance Optimization", path: "/vite/bestpractices/performance" }, // Tips for faster builds and runtime
        { name: "Debugging", path: "/vite/bestpractices/debugging" }, // Debugging with Vite
      ],
    },
  ],
};

export default ViteNavigation;
