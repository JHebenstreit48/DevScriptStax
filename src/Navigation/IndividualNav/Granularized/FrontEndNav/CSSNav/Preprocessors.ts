import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CSSPreprocessors: Subpage = {
  name: "Preprocessors",
  subpages: [
    {
      name: "LESS",
      subpages: [
        {
          name: "Getting Started",
          subpages: [
            {
              name: "Introduction",
              path: "/css/preprocessors/less/gettingstarted/intro",
            },
            {
              name: "LESS Syntax & Basics",
              path: "/css/preprocessors/less/gettingstarted/syntax",
            },
            {
              name: "Variables & Nesting",
              path: "/css/preprocessors/less/gettingstarted/variables",
            },
            {
              name: "Mixins & Functions",
              path: "/css/preprocessors/less/gettingstarted/mixins",
            },
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            {
              name: "Operations & Color Functions",
              path: "/css/preprocessors/less/advanced/operations",
            },
            {
              name: "Imports & Scope",
              path: "/css/preprocessors/less/advanced/imports",
            },
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            {
              name: "Optimization & Performance",
              path: "/css/preprocessors/less/best-practices/optimization",
            },
            {
              name: "Common Mistakes & Debugging",
              path: "/css/preprocessors/less/best-practices/debugging",
            },
          ],
        },
      ],
    },
    {
      name: "Sass",
      subpages: [
        {
          name: "Getting Started",
          subpages: [
            {
              name: "Introduction",
              path: "/css/preprocessors/sass/gettingstarted/intro",
            },
            {
              name: "Variables & Nesting",
              path: "/css/preprocessors/sass/gettingstarted/variables",
            },
            {
              name: "Mixins & Functions",
              path: "/css/preprocessors/sass/gettingstarted/mixins",
            },
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            {
              name: "Control Directives & Loops",
              path: "/css/preprocessors/sass/advanced/control-directives",
            },
            {
              name: "Operators & Calculations",
              path: "/css/preprocessors/sass/advanced/operators",
            },
            {
              name: "Partials & Imports",
              path: "/css/preprocessors/sass/advanced/partials",
            },
            {
              name: "Extend & Placeholder Selectors",
              path: "/css/preprocessors/sass/advanced/extend",
            },
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            {
              name: "Optimization & Performance",
              path: "/css/preprocessors/sass/best-practices/optimization",
            },
            {
              name: "Common Mistakes & Debugging",
              path: "/css/preprocessors/sass/best-practices/debugging",
            },
          ],
        },
      ],
    },
    {
      name: "SCSS",
      subpages: [
        {
          name: "Getting Started",
          subpages: [
            {
              name: "Introduction & How It Differs from Sass",
              path: "/css/preprocessors/scss/gettingstarted/intro",
            },
            {
              name: "SCSS Syntax vs. Sass",
              path: "/css/preprocessors/scss/gettingstarted/syntax",
            },
            {
              name: "Why SCSS Is Preferred Today",
              path: "/css/preprocessors/scss/gettingstarted/why-scss",
            },
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            {
              name: "Best Practices for SCSS",
              path: "/css/preprocessors/scss/best-practices/optimization",
            },
          ],
        },
      ],
    },
  ],
};

export default CSSPreprocessors;
