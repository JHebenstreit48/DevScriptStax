import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Fixtures & Lifecycle",
      subpages: [
        {
          name: "setUp/tearDown",
          path: "/testing/unit/phpunit/advanced/fixtures-lifecycle/setup-teardown"
        },
        {
          name: "TestCase Patterns",
          path: "/testing/unit/phpunit/advanced/fixtures-lifecycle/testcase-patterns"
        }
      ]
    },
    {
      name: "Coverage & Quality",
      subpages: [
        {
          name: "Code Coverage",
          path: "/testing/unit/phpunit/advanced/coverage-quality/code-coverage"
        },
        {
          name: "Risky & Incomplete",
          path: "/testing/unit/phpunit/advanced/coverage-quality/risky-incomplete"
        }
      ]
    },
    {
      name: "CI & Debug",
      subpages: [
        {
          name: "CI Integration",
          path: "/testing/unit/phpunit/advanced/ci-debug/ci-integration"
        },
        {
          name: "Debugging",
          path: "/testing/unit/phpunit/advanced/ci-debug/debugging"
        }
      ]
    },
    {
      name: "Frameworks",
      subpages: [
        {
          name: "Laravel Integration",
          path: "/testing/unit/phpunit/advanced/frameworks/laravel"
        },
        {
          name: "Symfony Integration",
          path: "/testing/unit/phpunit/advanced/frameworks/symfony"
        }
      ]
    },
    {
      name: "Patterns",
      subpages: [
        {
          name: "Best Practices",
          path: "/testing/unit/phpunit/advanced/patterns/best-practices"
        },
        {
          name: "Test Organization",
          path: "/testing/unit/phpunit/advanced/patterns/test-organization"
        }
      ]
    }
  ]
};

export default Advanced;