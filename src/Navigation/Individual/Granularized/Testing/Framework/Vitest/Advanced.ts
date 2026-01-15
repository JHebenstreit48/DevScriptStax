import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Coverage & Snapshots",
      subpages: [
        {
          name: "Coverage",
          path: "/testing/framework/vitest/advanced/coverage-snapshots/coverage"
        },
        {
          name: "Snapshots",
          path: "/testing/framework/vitest/advanced/coverage-snapshots/snapshots"
        }
      ]
    },
    {
      name: "Vite & Modules",
      subpages: [
        {
          name: "Vite Config",
          path: "/testing/framework/vitest/advanced/vite-modules/vite-config"
        },
        {
          name: "Aliases & ESM",
          path: "/testing/framework/vitest/advanced/vite-modules/aliases-esm"
        }
      ]
    },
    {
      name: "Watch & Perf",
      subpages: [
        {
          name: "Watch Filters",
          path: "/testing/framework/vitest/advanced/watch-perf/watch-filters"
        },
        {
          name: "Performance",
          path: "/testing/framework/vitest/advanced/watch-perf/performance"
        }
      ]
    },
    {
      name: "CI & Debug",
      subpages: [
        {
          name: "CI Integration",
          path: "/testing/framework/vitest/advanced/ci-debug/ci-integration"
        },
        {
          name: "Debugging",
          path: "/testing/framework/vitest/advanced/ci-debug/debugging"
        }
      ]
    },
    {
      name: "Framework Integrations",
      subpages: [
        {
          name: "React Integration",
          path: "/testing/framework/vitest/advanced/frameworks/react"
        },
        {
          name: "Vue/Svelte Integration",
          path: "/testing/framework/vitest/advanced/frameworks/vue-svelte"
        }
      ]
    }
  ]
};

export default Advanced;