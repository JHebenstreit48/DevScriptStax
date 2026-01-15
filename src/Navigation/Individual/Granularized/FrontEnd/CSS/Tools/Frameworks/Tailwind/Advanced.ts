import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Theming",
      subpages: [
        {
          name: "Dark Mode Strategies",
          path: "/css/tools/frameworks/tailwind/advanced/theming/dark-mode-strategies"
        },
        {
          name: "Design Tokens & CSS Vars",
          path: "/css/tools/frameworks/tailwind/advanced/theming/design-tokens-and-css-vars"
        }
      ]
    },
    {
      name: "Plugins",
      subpages: [
        {
          name: "Official Plugins",
          path: "/css/tools/frameworks/tailwind/advanced/plugins/official-plugins"
        },
        {
          name: "Custom Plugins",
          path: "/css/tools/frameworks/tailwind/advanced/plugins/custom-plugins"
        }
      ]
    },
    {
      name: "Composition",
      subpages: [
        {
          name: "@apply & @layer",
          path: "/css/tools/frameworks/tailwind/advanced/composition/apply-and-layer"
        },
        {
          name: "Variants & State",
          path: "/css/tools/frameworks/tailwind/advanced/composition/variants-and-state"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Tree-Shake & Safelist",
          path: "/css/tools/frameworks/tailwind/advanced/performance/tree-shake-and-safelist"
        },
        {
          name: "Dynamic Class Patterns",
          path: "/css/tools/frameworks/tailwind/advanced/performance/dynamic-class-patterns"
        }
      ]
    },
    {
      name: "Integration",
      subpages: [
        {
          name: "Build Tools (Vite/Webpack)",
          path: "/css/tools/frameworks/tailwind/advanced/integration/build-tools-vite-webpack"
        },
        {
          name: "Frameworks (React/Next)",
          path: "/css/tools/frameworks/tailwind/advanced/integration/frameworks-react-next"
        }
      ]
    }
  ]
};

export default Advanced;