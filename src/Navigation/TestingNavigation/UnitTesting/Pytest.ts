import { Subpage } from "@/Navigation/NavigationTypes";

const PytestNavigation: Subpage = {
  name: "Pytest",
  subpages: [
    // ---------- Pytest Fundamentals Navigation Start ----------
    {
      name: "Pytest Fundamentals",
      subpages: [
        { name: "Introduction to Pytest", path: "/testing/unit/pytest/intro" },
        { name: "Installing Pytest", path: "/testing/unit/pytest/install" },
        { name: "Writing Your First Pytest Test", path: "/testing/unit/pytest/first-test" },
        { name: "Running Pytest Tests", path: "/testing/unit/pytest/running-tests" },
      ],
    },
    // ---------- Pytest Fundamentals Navigation End ----------

    // ---------- Writing Pytest Tests Navigation Start ----------
    {
      name: "Writing Pytest Tests",
      subpages: [
        { name: "Assertions & Expected Outcomes", path: "/testing/unit/pytest/assertions" },
        { name: "Parametrized Tests", path: "/testing/unit/pytest/parametrized" },
        { name: "Fixtures in Pytest", path: "/testing/unit/pytest/fixtures" },
        { name: "Mocking & Patching", path: "/testing/unit/pytest/mocking" },
        { name: "Handling Exceptions in Tests", path: "/testing/unit/pytest/exceptions" },
      ],
    },
    // ---------- Writing Pytest Tests Navigation End ----------

    // ---------- Advanced Pytest Topics Navigation Start ----------
    {
      name: "Advanced Pytest Topics",
      subpages: [
        { name: "Parallel Test Execution", path: "/testing/unit/pytest/parallel" },
        { name: "Test Discovery & Organization", path: "/testing/unit/pytest/discovery" },
        { name: "Code Coverage with Pytest", path: "/testing/unit/pytest/code-coverage" },
        { name: "Using Pytest with Django & Flask", path: "/testing/unit/pytest/frameworks" },
        { name: "Continuous Integration with Pytest", path: "/testing/unit/pytest/ci-integration" },
        { name: "Best Practices for Pytest", path: "/testing/unit/pytest/best-practices" },
      ],
    },
    // ---------- Advanced Pytest Topics Navigation End ----------
  ],
};

export default PytestNavigation;
