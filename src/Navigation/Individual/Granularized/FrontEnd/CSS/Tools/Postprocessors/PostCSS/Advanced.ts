import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Plugin Authoring",
      subpages: [
        {
          name: "Plugin Anatomy",
          path: "/css/tools/postprocessors/postcss/advanced/plugin-authoring/plugin-anatomy"
        },
        {
          name: "AST Walk & Transforms",
          path: "/css/tools/postprocessors/postcss/advanced/plugin-authoring/ast-walk-and-transforms"
        }
      ]
    },
    {
      name: "Performance & Debug",
      subpages: [
        {
          name: "Source Maps & Diagnostics",
          path: "/css/tools/postprocessors/postcss/advanced/performance-and-debug/source-maps-and-diagnostics"
        },
        {
          name: "Caching & Parallel",
          path: "/css/tools/postprocessors/postcss/advanced/performance-and-debug/caching-and-parallel"
        }
      ]
    },
    {
      name: "Polyfills & Transforms",
      subpages: [
        {
          name: "Custom Properties & Media",
          path: "/css/tools/postprocessors/postcss/advanced/polyfills-and-transforms/custom-properties-and-media"
        },
        {
          name: "Selector Features",
          path: "/css/tools/postprocessors/postcss/advanced/polyfills-and-transforms/selector-features"
        }
      ]
    },
    {
      name: "Migration & Compat",
      subpages: [
        {
          name: "PostCSS 8 & ESM",
          path: "/css/tools/postprocessors/postcss/advanced/migration-and-compat/postcss-8-and-esm"
        },
        {
          name: "CSS Modules & Tailwind",
          path: "/css/tools/postprocessors/postcss/advanced/migration-and-compat/css-modules-and-tailwind"
        }
      ]
    }
  ]
};

export default Advanced;