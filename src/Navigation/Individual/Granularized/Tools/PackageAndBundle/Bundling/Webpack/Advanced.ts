import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Perf & Code Split",
      subpages: [
        {
          name: "Caching & Minify",
          path: "/tools/bundling/webpack/advanced/perf/caching-minify"
        },
        {
          name: "Code Splitting",
          path: "/tools/bundling/webpack/advanced/perf/code-splitting"
        }
      ]
    },
    {
      name: "Dev & DX",
      subpages: [
        {
          name: "Dev Server & HMR",
          path: "/tools/bundling/webpack/advanced/dev/hmr"
        },
        {
          name: "Source Maps",
          path: "/tools/bundling/webpack/advanced/dev/source-maps"
        }
      ]
    },
    {
      name: "Advanced Concepts",
      subpages: [
        {
          name: "Tree Shaking",
          path: "/tools/bundling/webpack/advanced/concepts/tree-shaking"
        },
        {
          name: "Module Federation",
          path: "/tools/bundling/webpack/advanced/concepts/module-federation"
        }
      ]
    }
  ]
};

export default Advanced;