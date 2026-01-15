import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Coverage & Perf",
      subpages: [
        {
          name: "Istanbul/nyc",
          path: "/testing/framework/mocha/advanced/coverage-perf/istanbul-nyc"
        },
        {
          name: "Performance",
          path: "/testing/framework/mocha/advanced/coverage-perf/performance"
        }
      ]
    },
    {
      name: "CI & Debug",
      subpages: [
        {
          name: "CI Integration",
          path: "/testing/framework/mocha/advanced/ci-debug/ci-integration"
        },
        {
          name: "Debugging",
          path: "/testing/framework/mocha/advanced/ci-debug/debugging"
        }
      ]
    },
    {
      name: "Framework Integrations",
      subpages: [
        {
          name: "React Integration",
          path: "/testing/framework/mocha/advanced/frameworks/react"
        },
        {
          name: "Next.js Integration",
          path: "/testing/framework/mocha/advanced/frameworks/nextjs"
        }
      ]
    },
    {
      name: "Node Integration",
      subpages: [
        {
          name: "ESM vs CJS",
          path: "/testing/framework/mocha/advanced/node/esm-vs-cjs"
        },
        {
          name: "CLI Flags & Process",
          path: "/testing/framework/mocha/advanced/node/cli-flags-process"
        }
      ]
    },
    {
      name: "Reporters & Patterns",
      subpages: [
        {
          name: "Reporters",
          path: "/testing/framework/mocha/advanced/reporters-patterns/reporters"
        },
        {
          name: "Best Practices",
          path: "/testing/framework/mocha/advanced/reporters-patterns/best-practices"
        }
      ]
    }
  ]
};

export default Advanced;