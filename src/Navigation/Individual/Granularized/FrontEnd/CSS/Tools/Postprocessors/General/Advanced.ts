import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Pipeline Design",
      subpages: [
        {
          name: "Ordering & Conflicts",
          path: "/css/tools/postprocessors/advanced/pipeline-design/ordering-and-conflicts"
        },
        {
          name: "Env-Aware Pipelines",
          path: "/css/tools/postprocessors/advanced/pipeline-design/env-aware-pipelines"
        }
      ]
    },
    {
      name: "Performance & Debug",
      subpages: [
        {
          name: "Source Maps & Diagnostics",
          path: "/css/tools/postprocessors/advanced/performance-and-debug/source-maps-and-diagnostics"
        },
        {
          name: "Caching & Parallel",
          path: "/css/tools/postprocessors/advanced/performance-and-debug/caching-and-parallel"
        }
      ]
    },
    {
      name: "Specialized Transforms",
      subpages: [
        {
          name: "RTL (RTLCSS)",
          path: "/css/tools/postprocessors/advanced/specialized-transforms/rtl-rtlcss"
        },
        {
          name: "Media Query Packing",
          path: "/css/tools/postprocessors/advanced/specialized-transforms/media-query-packing"
        }
      ]
    },
    {
      name: "Compat & Migration",
      subpages: [
        {
          name: "PostCSS 8+ & ESM",
          path: "/css/tools/postprocessors/advanced/compat-and-migration/postcss-8-and-esm"
        },
        {
          name: "Legacy Build Migration",
          path: "/css/tools/postprocessors/advanced/compat-and-migration/legacy-build-migration"
        }
      ]
    }
  ]
};

export default Advanced;