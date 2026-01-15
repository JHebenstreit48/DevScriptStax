import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Customization",
      subpages: [
        {
          name: "Disable & Inline",
          path: "/standardjs/advanced/customization/disable-inline"
        },
        {
          name: "Extending with ESLint",
          path: "/standardjs/advanced/customization/extending-with-eslint"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Large Repos",
          path: "/standardjs/advanced/performance/large-repos"
        },
        {
          name: "Caching & Speed",
          path: "/standardjs/advanced/performance/caching-speed"
        }
      ]
    },
    {
      name: "CI & Hooks",
      subpages: [
        {
          name: "Husky & lint-staged",
          path: "/standardjs/advanced/ci-hooks/husky-lint-staged"
        },
        {
          name: "Pipelines",
          path: "/standardjs/advanced/ci-hooks/pipelines"
        }
      ]
    },
    {
      name: "Interoperability",
      subpages: [
        {
          name: "With Prettier",
          path: "/standardjs/advanced/interoperability/with-prettier"
        },
        {
          name: "With ESLint",
          path: "/standardjs/advanced/interoperability/with-eslint"
        }
      ]
    }
  ]
};

export default Advanced;