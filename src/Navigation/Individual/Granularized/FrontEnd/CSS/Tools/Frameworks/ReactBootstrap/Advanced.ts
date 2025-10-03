import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Integration",
      subpages: [
        {
          name: "Routing (NavLink)",
          path: "/frameworks/react-bootstrap/advanced/integration/routing-navlink"
        },
        {
          name: "Forms & Validation",
          path: "/frameworks/react-bootstrap/advanced/integration/forms-and-validation"
        }
      ]
    },
    {
      name: "Theming",
      subpages: [
        {
          name: "CSS Vars & Overrides",
          path: "/frameworks/react-bootstrap/advanced/theming/css-vars-and-overrides"
        },
        {
          name: "Custom Components",
          path: "/frameworks/react-bootstrap/advanced/theming/custom-components"
        }
      ]
    },
    {
      name: "SSR & Code Split",
      subpages: [
        {
          name: "SSR Considerations",
          path: "/frameworks/react-bootstrap/advanced/ssr-and-code-split/ssr-considerations"
        },
        {
          name: "Tree-Shaking Imports",
          path: "/frameworks/react-bootstrap/advanced/ssr-and-code-split/tree-shaking-imports"
        }
      ]
    },
    {
      name: "A11y & Testing",
      subpages: [
        {
          name: "Accessibility",
          path: "/frameworks/react-bootstrap/advanced/a11y-and-testing/accessibility"
        },
        {
          name: "Component Testing",
          path: "/frameworks/react-bootstrap/advanced/a11y-and-testing/component-testing"
        }
      ]
    }
  ]
};

export default Advanced;