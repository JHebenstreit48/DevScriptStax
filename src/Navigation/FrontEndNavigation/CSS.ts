import { Subpage } from "@/Navigation/NavigationTypes";

const CSSNavigation: Subpage = {
  name: "CSS",
  subpages: [
    {
      "name": "Vanilla CSS",
      "subpages": [
        {
          "name": "CSS Basics",
          "subpages": [
            {
              "name": "CSS Intro and Syntax",
              "path": "/css/basics/intro"
            },
            {
              "name": "Selectors",
              "path": "/css/basics/selectors"
            },
            {
              "name": "Box Model",
              "path": "/css/basics/boxmodel" // Add border-radius and box-shadow here
            },
            {
              "name": "Positioning",
              "path": "/css/basics/positioning"
            }
          ]
        },
        {
          "name": "Layouts",
          "subpages": [
            {
              "name": "Flexbox",
              "path": "/css/vanillacss/layouts/flexbox"
            },
            {
              "name": "Grid",
              "path": "/css/vanillacss/layouts/grid" // No new page needed
            }
          ]
        },
        {
          "name": "Advanced",
          "subpages": [
            {
              "name": "Media Queries",
              "path": "/css/vanillcss/advanced/mediaqueries"
            },
            {
              "name": "CSS Variables",
              "path": "/css/vanillacss/advanced/variables"
            },
            {
              "name": "Transitions & Animations",
              "path": "/css/vanillacss/advanced/animations" // Rename to include Transitions
            },
            {
              "name": "Transform",
              "path": "/css/vanillacss/advanced/transforms" // New page for transforms
            }
          ]
        }
      ]
    },    
    {
      name: "Frameworks",
      subpages: [
        {
          name: "Bootstrap",
          subpages: [
            { name: "Introduction", path: "/css/frameworks/bootstrap/intro" }, // Includes CDN links
            { name: "Grid System", path: "/css/frameworks/bootstrap/grid" },
            {
              name: "Typography",
              path: "/css/frameworks/bootstrap/typography",
            },
            { name: "Utilities", path: "/css/frameworks/bootstrap/utilities" },
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
            { name: "Introduction", path: "/css/frameworks/tailwind/intro" }, // Includes CDN links
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
    },
    {
      name: "Preprocessors",
      subpages: [
        {
          name: "LESS",
          subpages: [
            { name: "Introduction", path: "/css/preprocessors/less/intro" },
            { name: "LESS Syntax", path: "/css/preprocessors/less/syntax" },
            {
              name: "Variables in LESS",
              path: "/css/preprocessors/less/variables",
            },
            { name: "Mixins", path: "/css/preprocessors/less/mixins" },
          ],
        },
        {
          name: "SASS",
          subpages: [
            { name: "Introduction", path: "/css/preprocessors/sass/intro" },
            { name: "SASS Syntax", path: "/css/preprocessors/sass/syntax" },
            {
              name: "Variables in SASS",
              path: "/css/preprocessors/sass/variables",
            },
            { name: "Mixins", path: "/css/preprocessors/sass/mixins" },
          ],
        },
        {
          name: "SCSS",
          subpages: [
            { name: "Introduction", path: "/css/preprocessors/scss/intro" },
            { name: "SCSS Syntax", path: "/css/preprocessors/scss/syntax" },
            {
              name: "Variables in SCSS",
              path: "/css/preprocessors/scss/variables",
            },
            { name: "Mixins", path: "/css/preprocessors/scss/mixins" },
          ],
        },
      ],
    },
    {
      name: "Post-Processors",
      subpages: [
        {
          name: "PostCSS",
          subpages: [
            { name: "Introduction", path: "/css/postprocessors/postcss/intro" },
            {
              name: "Custom Plugins",
              path: "/css/postprocessors/postcss/plugins",
            },
          ],
        },
      ],
    },
  ],
};

export default CSSNavigation;
