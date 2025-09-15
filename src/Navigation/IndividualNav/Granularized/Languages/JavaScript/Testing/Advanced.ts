import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Stability & Data",
      subpages: [
        {
          name: "Flaky Tests & Retries",
          path: "/javascript/testing/advanced/stability-and-data/flaky-tests-and-retries"
        },
        {
          name: "Builders & Fixtures",
          path: "/javascript/testing/advanced/stability-and-data/builders-and-fixtures"
        }
      ]
    },
    {
      name: "Environment",
      subpages: [
        {
          name: "Time & Randomness Control",
          path: "/javascript/testing/advanced/environment/time-and-randomness-control"
        },
        {
          name: "Network Strategies",
          path: "/javascript/testing/advanced/environment/network-strategies"
        }
      ]
    },
    {
      name: "Coverage & Quality",
      subpages: [
        {
          name: "Coverage Caveats (Transpile/ESM)",
          path: "/javascript/testing/advanced/coverage-and-quality/coverage-caveats-transpile-and-esm"
        },
        {
          name: "Assertions & Invariants",
          path: "/javascript/testing/advanced/coverage-and-quality/assertions-and-invariants"
        }
      ]
    },
    {
      name: "Runners (Overview)",
      subpages: [
        {
          name: "Choosing a Runner",
          path: "/javascript/testing/advanced/runners-overview/choosing-a-runner"
        },
        {
          name: "DOM vs Node Envs",
          path: "/javascript/testing/advanced/runners-overview/dom-vs-node-envs"
        }
      ]
    }
  ]
};

export default Advanced;