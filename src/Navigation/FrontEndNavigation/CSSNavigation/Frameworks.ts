import { Subpage } from "@/Navigation/NavigationTypes";

const FrameworksNavigation: Subpage = {
  name: "Frameworks",
  subpages: [
    {
      name: "Bootstrap",
      subpages: [
        {
          name: "Getting Started",
          subpages: [
            {
              name: "Introduction",
              path: "/css/frameworks/bootstrap/intro",
            }, // Includes CDN links
            {
              name: "Grid System",
              path: "/css/frameworks/bootstrap/grid",
            },
            {
              name: "Typography",
              path: "/css/frameworks/bootstrap/typography",
            },
            {
              name: "Utilities",
              path: "/css/frameworks/bootstrap/utilities",
            },
          ],
        },
        {
          name: "Components",
          subpages: [
            {
              name: "Accordions",
              path: "/css/frameworks/bootstrap/components/accordions",
            },
            {
              name: "Alerts",
              path: "/css/frameworks/bootstrap/components/alerts",
            },
            {
              name: "Buttons",
              path: "/css/frameworks/bootstrap/components/buttons",
            },
            {
              name: "Cards",
              path: "/css/frameworks/bootstrap/components/cards",
            },
            {
              name: "Dropdowns",
              path: "/css/frameworks/bootstrap/components/dropdowns",
            },
            {
              name: "Modals",
              path: "/css/frameworks/bootstrap/components/modals",
            },
            {
              name: "Tooltips",
              path: "/css/frameworks/bootstrap/components/tooltips",
            },
          ],
        },
      ],
    },
    {
      name: "React Bootstrap",
      subpages: [
        {
          name: "Introduction",
          path: "/css/frameworks/reactbootstrap/intro",
        }, // Includes CDN links
        {
          name: "Grid System",
          path: "/css/frameworks/reactbootstrap/grid",
        },
        {
          name: "Typography",
          path: "/css/frameworks/reactbootstrap/typography",
        },
        {
          name: "Utilities",
          path: "/css/frameworks/reactbootstrap/utilities",
        },
        {
          name: "Components",
          subpages: [
            {
              name: "Accordions",
              path: "/css/frameworks/reactbootstrap/components/accordions",
            },
            {
              name: "Alerts",
              path: "/css/frameworks/reactbootstrap/components/alerts",
            },
            {
              name: "Buttons",
              path: "/css/frameworks/reactbootstrap/components/buttons",
            },
            {
              name: "Cards",
              path: "/css/frameworks/reactbootstrap/components/cards",
            },
            {
              name: "Dropdowns",
              path: "/css/frameworks/reactbootstrap/components/dropdowns",
            },
            {
              name: "Modals",
              path: "/css/frameworks/reactbootstrap/components/modals",
            },
            {
              name: "Tooltips",
              path: "/css/frameworks/reactbootstrap/components/tooltips",
            },
          ],
        },
      ],
    },
    {
      name: "Tailwind CSS",
      subpages: [
        {
          name: "Introduction",
          path: "/css/frameworks/tailwind/intro",
        }, // Includes CDN links
        {
          name: "Layout Utilities",
          path: "/css/frameworks/tailwind/layout",
        },
        {
          name: "Typography Utilities",
          path: "/css/frameworks/tailwind/typography",
        },
        {
          name: "Color Utilities",
          path: "/css/frameworks/tailwind/colors",
        },
        {
          name: "Custom Components",
          path: "/css/frameworks/tailwind/components",
        },
      ],
    },
  ],
};

export default FrameworksNavigation;
