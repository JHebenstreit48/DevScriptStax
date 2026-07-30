import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/css/tools/postprocessors/basics/fundamentals/introduction"
        },
        {
          name: "Post vs Pre",
          path: "/css/tools/postprocessors/basics/fundamentals/post-vs-pre"
        }
      ]
    },
    {
      name: "Ecosystem",
      subpages: [
        {
          name: "Popular Tools",
          path: "/css/tools/postprocessors/basics/ecosystem/popular-tools"
        },
        {
          name: "Community & Resources",
          path: "/css/tools/postprocessors/basics/ecosystem/community-and-resources"
        }
      ]
    },
    {
      name: "Integration",
      subpages: [
        {
          name: "Vite / Webpack / Parcel",
          path: "/css/tools/postprocessors/basics/integration/vite-webpack-parcel"
        },
        {
          name: "Config Patterns",
          path: "/css/tools/postprocessors/basics/integration/config-patterns"
        }
      ]
    },
    {
      name: "Core Tasks",
      subpages: [
        {
          name: "Autoprefix & Browserslist",
          path: "/css/tools/postprocessors/basics/core-tasks/autoprefix-and-browserslist"
        },
        {
          name: "Feature Polyfills",
          path: "/css/tools/postprocessors/basics/core-tasks/feature-polyfills"
        }
      ]
    },
    {
      name: "Optimization",
      subpages: [
        {
          name: "Minify (cssnano / csso)",
          path: "/css/tools/postprocessors/basics/optimization/minify-cssnano-csso"
        },
        {
          name: "Purge & Tree-Shake",
          path: "/css/tools/postprocessors/basics/optimization/purge-and-tree-shake"
        }
      ]
    }
  ]
};

export default Basics;