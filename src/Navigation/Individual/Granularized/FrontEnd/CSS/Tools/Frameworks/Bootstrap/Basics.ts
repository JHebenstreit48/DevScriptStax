import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/frameworks/bootstrap/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/frameworks/bootstrap/basics/fundamentals/install-setup"
        }
      ]
    },
    {
      name: "Layout",
      subpages: [
        {
          name: "Grid System",
          path: "/frameworks/bootstrap/basics/layout/grid-system"
        },
        {
          name: "Containers & Breakpoints",
          path: "/frameworks/bootstrap/basics/layout/containers-and-breakpoints"
        }
      ]
    },
    {
      name: "Utilities",
      subpages: [
        {
          name: "Spacing & Sizing",
          path: "/frameworks/bootstrap/basics/utilities/spacing-and-sizing"
        },
        {
          name: "Display & Visibility",
          path: "/frameworks/bootstrap/basics/utilities/display-and-visibility"
        }
      ]
    },
    {
      name: "Typography & Content",
      subpages: [
        {
          name: "Typography",
          path: "/frameworks/bootstrap/basics/typography-and-content/typography"
        },
        {
          name: "Images & Figures",
          path: "/frameworks/bootstrap/basics/typography-and-content/images-and-figures"
        }
      ]
    },
    {
      name: "Components",
      subpages: [
        {
          name: "Navigation",
          subpages: [
            {
              name: "Navbars & Tabs",
              path: "/frameworks/bootstrap/basics/components/navigation/navbars-and-tabs"
            },
            {
              name: "Breadcrumbs & Pagination",
              path: "/frameworks/bootstrap/basics/components/navigation/breadcrumbs-and-pagination"
            }
          ]
        },
        {
          name: "Overlays",
          subpages: [
            {
              name: "Modals",
              path: "/frameworks/bootstrap/basics/components/overlays/modals"
            },
            {
              name: "Dropdowns & Tooltips",
              path: "/frameworks/bootstrap/basics/components/overlays/dropdowns-and-tooltips"
            }
          ]
        },
        {
          name: "Data Display",
          subpages: [
            {
              name: "Cards",
              path: "/frameworks/bootstrap/basics/components/data-display/cards"
            },
            {
              name: "Tables",
              path: "/frameworks/bootstrap/basics/components/data-display/tables"
            }
          ]
        },
        {
          name: "Feedback",
          subpages: [
            {
              name: "Alerts & Badges",
              path: "/frameworks/bootstrap/basics/components/feedback/alerts-and-badges"
            },
            {
              name: "Spinners & Progress",
              path: "/frameworks/bootstrap/basics/components/feedback/spinners-and-progress"
            }
          ]
        }
      ]
    }
  ]
};

export default Basics;