import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Parallelism & Projects",
      subpages: [
        {
          name: "Parallel Execution",
          path: "/testing/e2e/playwright/advanced/parallelism-projects/parallel-execution"
        },
        {
          name: "Projects & Shards",
          path: "/testing/e2e/playwright/advanced/parallelism-projects/projects-shards"
        }
      ]
    },
    {
      name: "Visual & Perf",
      subpages: [
        {
          name: "Visual Testing",
          path: "/testing/e2e/playwright/advanced/visual-perf/visual-testing"
        },
        {
          name: "Performance",
          path: "/testing/e2e/playwright/advanced/visual-perf/performance"
        }
      ]
    },
    {
      name: "CI & Debug",
      subpages: [
        {
          name: "CI Integration",
          path: "/testing/e2e/playwright/advanced/ci-debug/ci-integration"
        },
        {
          name: "Debugging",
          path: "/testing/e2e/playwright/advanced/ci-debug/debugging"
        }
      ]
    },
    {
      name: "Patterns",
      subpages: [
        {
          name: "Best Practices",
          path: "/testing/e2e/playwright/advanced/patterns/best-practices"
        },
        {
          name: "Custom Helpers",
          path: "/testing/e2e/playwright/advanced/patterns/custom-helpers"
        }
      ]
    }
  ]
};

export default Advanced;