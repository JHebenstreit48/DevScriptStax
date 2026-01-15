import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Customization",
      subpages: [
        {
          name: "Custom Rules",
          path: "/tslint/advanced/customization/custom-rules"
        },
        {
          name: "Rule Sets & Extends",
          path: "/tslint/advanced/customization/rule-sets-extends"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Large Projects",
          path: "/tslint/advanced/performance/large-projects"
        },
        {
          name: "Caching & Speed",
          path: "/tslint/advanced/performance/caching-speed"
        }
      ]
    },
    {
      name: "CI & Monorepos",
      subpages: [
        {
          name: "Pipelines",
          path: "/tslint/advanced/ci-monorepos/pipelines"
        },
        {
          name: "Workspaces",
          path: "/tslint/advanced/ci-monorepos/workspaces"
        }
      ]
    },
    {
      name: "Migration",
      subpages: [
        {
          name: "TSLint vs ESLint",
          path: "/tslint/advanced/migration/tslint-vs-eslint"
        },
        {
          name: "tslint-to-eslint",
          path: "/tslint/advanced/migration/tslint-to-eslint"
        }
      ]
    }
  ]
};

export default Advanced;