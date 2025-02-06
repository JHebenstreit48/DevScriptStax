import { Subpage } from "@/Navigation/NavigationTypes";

const CypressNavigation: Subpage = {
  name: "Cypress Testing",
  subpages: [
    // ---------- Cypress Basics Navigation Start ----------
    {
      name: "Cypress Fundamentals",
      subpages: [
        { name: "Introduction to Cypress", path: "/testing/e2e/cypress/intro" },
        { name: "Cypress vs Selenium", path: "/testing/e2e/cypress/comparison" },
        { name: "Setting Up Cypress", path: "/testing/e2e/cypress/setup" },
        { name: "Writing Your First Test", path: "/testing/e2e/cypress/first-test" },
        { name: "Running Cypress Tests", path: "/testing/e2e/cypress/running-tests" },
      ],
    },
    // ---------- Cypress Basics Navigation End ----------

    // ---------- Cypress Test Writing Navigation Start ----------
    {
      name: "Writing Cypress Tests",
      subpages: [
        { name: "Selectors & Assertions", path: "/testing/e2e/cypress/selectors" },
        { name: "Working with Fixtures", path: "/testing/e2e/cypress/fixtures" },
        { name: "Mocking API Responses", path: "/testing/e2e/cypress/mocking" },
        { name: "Handling UI Events", path: "/testing/e2e/cypress/ui-events" },
        { name: "Custom Cypress Commands", path: "/testing/e2e/cypress/custom-commands" },
      ],
    },
    // ---------- Cypress Test Writing Navigation End ----------

    // ---------- Advanced Cypress Topics Navigation Start ----------
    {
      name: "Advanced Cypress Topics",
      subpages: [
        { name: "Parallel Test Execution", path: "/testing/e2e/cypress/parallel-execution" },
        { name: "Performance Testing with Cypress", path: "/testing/e2e/cypress/performance" },
        { name: "Cypress & Continuous Integration", path: "/testing/e2e/cypress/ci-integration" },
        { name: "Debugging Cypress Tests", path: "/testing/e2e/cypress/debugging" },
        { name: "Best Practices in Cypress", path: "/testing/e2e/cypress/best-practices" },
      ],
    },
    // ---------- Advanced Cypress Topics Navigation End ----------
  ],
};

export default CypressNavigation;
