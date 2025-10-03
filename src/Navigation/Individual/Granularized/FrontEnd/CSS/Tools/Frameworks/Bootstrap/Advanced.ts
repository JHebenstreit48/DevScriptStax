import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Theming",
      subpages: [
        {
          name: "Sass & Variables",
          path: "/frameworks/bootstrap/advanced/theming/sass-and-variables"
        },
        {
          name: "Customize Build",
          path: "/frameworks/bootstrap/advanced/theming/customize-build"
        }
      ]
    },
    {
      name: "JavaScript",
      subpages: [
        {
          name: "Init & Data API",
          path: "/frameworks/bootstrap/advanced/javascript/init-and-data-api"
        },
        {
          name: "Events & Options",
          path: "/frameworks/bootstrap/advanced/javascript/events-and-options"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Optimize & PurgeCSS",
          path: "/frameworks/bootstrap/advanced/performance/optimize-and-purgecss"
        },
        {
          name: "Modular Imports",
          path: "/frameworks/bootstrap/advanced/performance/modular-imports"
        }
      ]
    },
    {
      name: "A11y & RTL",
      subpages: [
        {
          name: "Accessibility",
          path: "/frameworks/bootstrap/advanced/a11y-and-rtl/accessibility"
        },
        {
          name: "RTL Support",
          path: "/frameworks/bootstrap/advanced/a11y-and-rtl/rtl-support"
        }
      ]
    },
    {
      name: "Components",
      subpages: [
        {
          name: "Overlays (JS)",
          subpages: [
            {
              name: "Modals API & Options",
              path: "/frameworks/bootstrap/advanced/components/overlays-js/modals-api-and-options"
            },
            {
              name: "Dropdowns & Tooltips API",
              path: "/frameworks/bootstrap/advanced/components/overlays-js/dropdowns-and-tooltips-api"
            }
          ]
        },
        {
          name: "Navigation (JS)",
          subpages: [
            {
              name: "Navbar Collapse & Events",
              path: "/frameworks/bootstrap/advanced/components/navigation-js/navbar-collapse-and-events"
            },
            {
              name: "Tabs & Pills JS",
              path: "/frameworks/bootstrap/advanced/components/navigation-js/tabs-and-pills-js"
            }
          ]
        }
      ]
    }
  ]
};

export default Advanced;