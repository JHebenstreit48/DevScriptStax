import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/css/tools/postprocessors/lightning-css/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/css/tools/postprocessors/lightning-css/basics/fundamentals/install-and-setup"
        }
      ]
    },
    {
      name: "Integration",
      subpages: [
        {
          name: "Vite / Parcel",
          path: "/css/tools/postprocessors/lightning-css/basics/integration/vite-and-parcel"
        },
        {
          name: "Webpack / Rollup",
          path: "/css/tools/postprocessors/lightning-css/basics/integration/webpack-and-rollup"
        }
      ]
    },
    {
      name: "Features",
      subpages: [
        {
          name: "Autoprefix & Targets",
          path: "/css/tools/postprocessors/lightning-css/basics/features/autoprefix-and-targets"
        },
        {
          name: "Modern CSS (Nesting / Custom Media)",
          path: "/css/tools/postprocessors/lightning-css/basics/features/modern-css-nesting-and-custom-media"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "CLI & Scripts",
          path: "/css/tools/postprocessors/lightning-css/basics/workflow/cli-and-scripts"
        },
        {
          name: "Source Maps (Basics)",
          path: "/css/tools/postprocessors/lightning-css/basics/workflow/source-maps-basics"
        }
      ]
    }
  ]
};

export default Basics;