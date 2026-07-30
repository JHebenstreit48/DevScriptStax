import type { Subpage } from '@/types/navigation';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Unit (stdlib)",
      subpages: [
        {
          name: "testing.T Basics",
          path: "/go/testing/unit/testing-t-basics"
        },
        {
          name: "Table Tests",
          path: "/go/testing/unit/table-tests"
        }
      ]
    },
    {
      name: "Testify",
      subpages: [
        {
          name: "Assertions",
          path: "/go/testing/testify/assertions"
        },
        {
          name: "Mocks & Suites",
          path: "/go/testing/testify/mocks-suites"
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