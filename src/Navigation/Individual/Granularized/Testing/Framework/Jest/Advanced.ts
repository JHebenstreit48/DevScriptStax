import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Snapshots & Patterns",
      subpages: [
        {
          name: "Snapshot Testing",
          path: "/testing/framework/jest/advanced/snapshots-patterns/snapshot-testing"
        },
        {
          name: "Best Practices",
          path: "/testing/framework/jest/advanced/snapshots-patterns/best-practices"
        }
      ]
    },
    {
      name: "Coverage & Perf",
      subpages: [
        {
          name: "Code Coverage",
          path: "/testing/framework/jest/advanced/coverage-perf/code-coverage"
        },
        {
          name: "Performance",
          path: "/testing/framework/jest/advanced/coverage-perf/performance"
        }
      ]
    },
    {
      name: "CI & Debug",
      subpages: [
        {
          name: "CI Integration",
          path: "/testing/framework/jest/advanced/ci-debug/ci-integration"
        },
        {
          name: "Debugging",
          path: "/testing/framework/jest/advanced/ci-debug/debugging"
        }
      ]
    },
    {
      name: "Frameworks",
      subpages: [
        {
          name: "React Testing Library",
          path: "/testing/framework/jest/advanced/frameworks/react-testing-library"
        },
        {
          name: "Next.js Config",
          path: "/testing/framework/jest/advanced/frameworks/nextjs-config"
        }
      ]
    },
    {
      name: "Modules & Transforms",
      subpages: [
        {
          name: "ESM vs CJS",
          path: "/testing/framework/jest/advanced/modules-transforms/esm-vs-cjs"
        },
        {
          name: "Module Mappers",
          path: "/testing/framework/jest/advanced/modules-transforms/module-mappers"
        }
      ]
    }
  ]
};

export default Advanced;