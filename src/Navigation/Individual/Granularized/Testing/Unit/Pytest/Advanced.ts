import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Parametrization",
      subpages: [
        {
          name: "Parametrized Tests",
          path: "/pytest/advanced/parametrization/parametrized-tests"
        },
        {
          name: "Parametrize Fixtures",
          path: "/pytest/advanced/parametrization/parametrize-fixtures"
        }
      ]
    },
    {
      name: "Fixtures & Scope",
      subpages: [
        {
          name: "Scope & Lifetime",
          path: "/pytest/advanced/fixtures-and-scope/scope-and-lifetime"
        },
        {
          name: "Autouse & Dynamic",
          path: "/pytest/advanced/fixtures-and-scope/autouse-and-dynamic"
        }
      ]
    },
    {
      name: "Isolation & Mocking",
      subpages: [
        {
          name: "Mocking & Patching",
          path: "/pytest/advanced/isolation-and-mocking/mocking-and-patching"
        },
        {
          name: "Exceptions & Error Cases",
          path: "/pytest/advanced/isolation-and-mocking/exceptions-and-error-cases"
        }
      ]
    },
    {
      name: "Discovery & Organization",
      subpages: [
        {
          name: "Discovery Rules",
          path: "/pytest/advanced/discovery-and-organization/discovery-rules"
        },
        {
          name: "Custom Collection",
          path: "/pytest/advanced/discovery-and-organization/custom-collection"
        }
      ]
    },
    {
      name: "Performance & Parallel",
      subpages: [
        {
          name: "Parallel (xdist)",
          path: "/pytest/advanced/performance-and-parallel/parallel-xdist"
        },
        {
          name: "Caching & Reruns",
          path: "/pytest/advanced/performance-and-parallel/caching-and-reruns"
        }
      ]
    },
    {
      name: "Coverage & Quality",
      subpages: [
        {
          name: "Coverage (pytest-cov)",
          path: "/pytest/advanced/coverage-and-quality/coverage-pytest-cov"
        },
        {
          name: "Best Practices",
          path: "/pytest/advanced/coverage-and-quality/best-practices"
        }
      ]
    },
    {
      name: "CI & Config",
      subpages: [
        {
          name: "pyproject / pytest.ini",
          path: "/pytest/advanced/ci-and-config/pyproject-and-pytest-ini"
        },
        {
          name: "CI Integration",
          path: "/pytest/advanced/ci-and-config/ci-integration"
        }
      ]
    }
  ]
};

export default Advanced;