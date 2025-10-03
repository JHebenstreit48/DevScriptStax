import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Minify & Compression",
          path: "/css/tools/postprocessors/lightning-css/advanced/performance/minify-and-compression"
        },
        {
          name: "Parallel & Cache",
          path: "/css/tools/postprocessors/lightning-css/advanced/performance/parallel-and-cache"
        }
      ]
    },
    {
      name: "Compatibility",
      subpages: [
        {
          name: "Targets & Browserslist",
          path: "/css/tools/postprocessors/lightning-css/advanced/compatibility/targets-and-browserslist"
        },
        {
          name: "Interop with PostCSS",
          path: "/css/tools/postprocessors/lightning-css/advanced/compatibility/interop-with-postcss"
        }
      ]
    },
    {
      name: "Transforms",
      subpages: [
        {
          name: "Nesting & @layer",
          path: "/css/tools/postprocessors/lightning-css/advanced/transforms/nesting-and-layer"
        },
        {
          name: "Custom Media & Selectors",
          path: "/css/tools/postprocessors/lightning-css/advanced/transforms/custom-media-and-selectors"
        }
      ]
    },
    {
      name: "Migration",
      subpages: [
        {
          name: "From PostCSS Stack",
          path: "/css/tools/postprocessors/lightning-css/advanced/migration/from-postcss-stack"
        },
        {
          name: "Mixed Pipelines",
          path: "/css/tools/postprocessors/lightning-css/advanced/migration/mixed-pipelines"
        }
      ]
    }
  ]
};

export default Advanced;