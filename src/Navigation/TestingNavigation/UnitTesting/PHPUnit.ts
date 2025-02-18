import { Subpage } from "@/Navigation/NavigationTypes";

const PHPUnitNavigation: Subpage = {
  name: "PHPUnit",
  subpages: [
    // ---------- PHPUnit Fundamentals Navigation Start ----------
    {
      name: "PHPUnit Fundamentals",
      subpages: [
        { name: "Introduction to PHPUnit", path: "/testing/unit/phpunit/intro" },
        { name: "Installing PHPUnit", path: "/testing/unit/phpunit/install" },
        { name: "Writing Your First PHPUnit Test", path: "/testing/unit/phpunit/first-test" },
        { name: "Running PHPUnit Tests", path: "/testing/unit/phpunit/running-tests" },
      ],
    },
    // ---------- PHPUnit Fundamentals Navigation End ----------

    // ---------- Writing PHPUnit Tests Navigation Start ----------
    {
      name: "Writing PHPUnit Tests",
      subpages: [
        { name: "Assertions & Expectations", path: "/testing/unit/phpunit/assertions" },
        { name: "Data Providers for Tests", path: "/testing/unit/phpunit/data-providers" },
        { name: "Mocking & Stubbing", path: "/testing/unit/phpunit/mocking" },
        { name: "Testing Exceptions", path: "/testing/unit/phpunit/exceptions" },
        { name: "Testing Private & Protected Methods", path: "/testing/unit/phpunit/private-methods" },
      ],
    },
    // ---------- Writing PHPUnit Tests Navigation End ----------

    // ---------- Advanced PHPUnit Topics Navigation Start ----------
    {
      name: "Advanced PHPUnit Topics",
      subpages: [
        { name: "Test Fixtures & Setup Methods", path: "/testing/unit/phpunit/fixtures" },
        { name: "Using PHPUnit with Laravel", path: "/testing/unit/phpunit/laravel" },
        { name: "Code Coverage with PHPUnit", path: "/testing/unit/phpunit/code-coverage" },
        { name: "Debugging PHPUnit Tests", path: "/testing/unit/phpunit/debugging" },
        { name: "PHPUnit & Continuous Integration", path: "/testing/unit/phpunit/ci-integration" },
        { name: "Best Practices for PHPUnit", path: "/testing/unit/phpunit/best-practices" },
      ],
    },
    // ---------- Advanced PHPUnit Topics Navigation End ----------
  ],
};

export default PHPUnitNavigation;
