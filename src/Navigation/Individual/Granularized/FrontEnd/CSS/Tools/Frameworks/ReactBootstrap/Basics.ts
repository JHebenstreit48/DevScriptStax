import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/frameworks/react-bootstrap/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/frameworks/react-bootstrap/basics/fundamentals/install-setup"
        }
      ]
    },
    {
      name: "Core Patterns",
      subpages: [
        {
          name: "Props & Variants",
          path: "/frameworks/react-bootstrap/basics/core-patterns/props-and-variants"
        },
        {
          name: "Composition & asProp",
          path: "/frameworks/react-bootstrap/basics/core-patterns/composition-and-asprop"
        }
      ]
    },
    {
      name: "Components",
      subpages: [
        {
          name: "Layout",
          subpages: [
            {
              name: "Container/Row/Col",
              path: "/frameworks/react-bootstrap/basics/components/layout/container-row-col"
            },
            {
              name: "Stack & Grid",
              path: "/frameworks/react-bootstrap/basics/components/layout/stack-and-grid"
            }
          ]
        },
        {
          name: "Navigation",
          subpages: [
            {
              name: "Navbar & Nav",
              path: "/frameworks/react-bootstrap/basics/components/navigation/navbar-and-nav"
            },
            {
              name: "Tabs & Breadcrumbs",
              path: "/frameworks/react-bootstrap/basics/components/navigation/tabs-and-breadcrumbs"
            }
          ]
        },
        {
          name: "Overlays",
          subpages: [
            {
              name: "Modal & Tooltip",
              path: "/frameworks/react-bootstrap/basics/components/overlays/modal-and-tooltip"
            },
            {
              name: "Popover & OverlayTrigger",
              path: "/frameworks/react-bootstrap/basics/components/overlays/popover-and-overlaytrigger"
            }
          ]
        },
        {
          name: "Data",
          subpages: [
            {
              name: "Card & ListGroup",
              path: "/frameworks/react-bootstrap/basics/components/data/card-and-listgroup"
            },
            {
              name: "Table & Pagination",
              path: "/frameworks/react-bootstrap/basics/components/data/table-and-pagination"
            }
          ]
        },
        {
          name: "Feedback",
          subpages: [
            {
              name: "Alert & Toast",
              path: "/frameworks/react-bootstrap/basics/components/feedback/alert-and-toast"
            },
            {
              name: "Spinner & ProgressBar",
              path: "/frameworks/react-bootstrap/basics/components/feedback/spinner-and-progressbar"
            }
          ]
        },
        {
          name: "Forms",
          subpages: [
            {
              name: "Controls & Groups",
              path: "/frameworks/react-bootstrap/basics/components/forms/controls-and-groups"
            },
            {
              name: "Validation States",
              path: "/frameworks/react-bootstrap/basics/components/forms/validation-states"
            }
          ]
        }
      ]
    }
  ]
};

export default Basics;