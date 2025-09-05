import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Unit",
      subpages: [
        {
          name: "testing.T & testify",
          path: "/go/testing/unit/testing-testify"
        },
        {
          name: "Table Tests",
          path: "/go/testing/unit/table-tests"
        }
      ]
    },
    {
      name: "Benchmarks",
      subpages: [
        {
          name: "testing.B",
          path: "/go/testing/benchmarks/testing-b"
        },
        {
          name: "pprof",
          path: "/go/testing/benchmarks/pprof"
        }
      ]
    },
    {
      name: "Integration",
      subpages: [
        {
          name: "HTTP Handlers",
          path: "/go/testing/integration/http-handlers"
        },
        {
          name: "DB Tests",
          path: "/go/testing/integration/db-tests"
        }
      ]
    }
  ]
};

export default Testing;