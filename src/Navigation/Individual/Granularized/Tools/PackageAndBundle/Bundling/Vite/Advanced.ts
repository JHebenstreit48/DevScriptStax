import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Build & Optimize",
      subpages: [
        {
          name: "Build Options",
          path: "/vite/advanced/build-and-optimize/build-options"
        },
        {
          name: "Code Splitting",
          path: "/vite/advanced/build-and-optimize/code-splitting"
        }
      ]
    },
    {
      name: "Env & Modes",
      subpages: [
        {
          name: "Modes & .env Loading",
          path: "/vite/advanced/env-and-modes/modes-and-env-loading"
        },
        {
          name: "VITE_ Prefix & Exposure",
          path: "/vite/advanced/env-and-modes/vite-prefix-and-exposure"
        }
      ]
    },
    {
      name: "Plugins",
      subpages: [
        {
          name: "Writing Plugins",
          path: "/vite/advanced/plugins/writing-plugins"
        },
        {
          name: "Plugin Examples",
          path: "/vite/advanced/plugins/plugin-examples"
        }
      ]
    },
    {
      name: "SSR & Libraries",
      subpages: [
        {
          name: "SSR Basics",
          path: "/vite/advanced/ssr-and-libraries/ssr-basics"
        },
        {
          name: "Library Mode",
          path: "/vite/advanced/ssr-and-libraries/library-mode"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Caching & OptimizeDeps",
          path: "/vite/advanced/performance/caching-and-optimizedeps"
        },
        {
          name: "Dependency Pre-Bundle",
          path: "/vite/advanced/performance/dependency-pre-bundle"
        }
      ]
    }
  ]
};

export default Advanced;