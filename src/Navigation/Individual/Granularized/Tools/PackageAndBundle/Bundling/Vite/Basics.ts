import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/vite/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/vite/basics/fundamentals/install-setup"
        },
        {
          name: "Project Structure",
          path: "/vite/basics/fundamentals/project-structure"
        }
      ]
    },
    {
      name: "Dev Server",
      subpages: [
        {
          name: "Scripts & HMR",
          path: "/vite/basics/dev-server/scripts-and-hmr"
        },
        {
          name: "Proxy & CORS",
          path: "/vite/basics/dev-server/proxy-and-cors"
        }
      ]
    },
    {
      name: "Config Basics",
      subpages: [
        {
          name: "vite.config",
          path: "/vite/basics/config-basics/vite-config"
        },
        {
          name: "Path Aliases",
          path: "/vite/basics/config-basics/path-aliases"
        }
      ]
    },
    {
      name: "Assets & CSS",
      subpages: [
        {
          name: "Static Assets",
          path: "/vite/basics/assets-and-css/static-assets"
        },
        {
          name: "CSS & PostCSS",
          path: "/vite/basics/assets-and-css/css-and-postcss"
        }
      ]
    }
  ]
};

export default Basics;