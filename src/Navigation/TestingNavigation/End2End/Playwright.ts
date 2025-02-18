import { Subpage } from "@/Navigation/NavigationTypes";

const PlaywrightNavigation: Subpage = {
  name: "Playwright Testing",
  subpages: [
    // ---------- Playwright Basics Navigation Start ----------
    {
      name: "Playwright Fundamentals",
      subpages: [
        { name: "Introduction to Playwright", path: "/testing/e2e/playwright/intro" },
        { name: "Playwright vs Cypress", path: "/testing/e2e/playwright/comparison" },
        { name: "Setting Up Playwright", path: "/testing/e2e/playwright/setup" },
        { name: "Writing Your First Test", path: "/testing/e2e/playwright/first-test" },
        { name: "Running Playwright Tests", path: "/testing/e2e/playwright/running-tests" },
      ],
    },
    // ---------- Playwright Basics Navigation End ----------

    // ---------- Playwright Test Writing Navigation Start ----------
    {
      name: "Writing Playwright Tests",
      subpages: [
        { name: "Locators & Selectors", path: "/testing/e2e/playwright/selectors" },
        { name: "Handling UI Interactions", path: "/testing/e2e/playwright/ui-interactions" },
        { name: "Mocking API Responses", path: "/testing/e2e/playwright/mocking" },
        { name: "Working with Fixtures", path: "/testing/e2e/playwright/fixtures" },
        { name: "Custom Playwright Commands", path: "/testing/e2e/playwright/custom-commands" },
      ],
    },
    // ---------- Playwright Test Writing Navigation End ----------

    // ---------- Advanced Playwright Topics Navigation Start ----------
    {
      name: "Advanced Playwright Topics",
      subpages: [
        { name: "Parallel Test Execution", path: "/testing/e2e/playwright/parallel-execution" },
        { name: "Visual Testing with Playwright", path: "/testing/e2e/playwright/visual-testing" },
        { name: "Performance Testing with Playwright", path: "/testing/e2e/playwright/performance" },
        { name: "Playwright & Continuous Integration", path: "/testing/e2e/playwright/ci-integration" },
        { name: "Debugging Playwright Tests", path: "/testing/e2e/playwright/debugging" },
        { name: "Best Practices in Playwright", path: "/testing/e2e/playwright/best-practices" },
      ],
    },
    // ---------- Advanced Playwright Topics Navigation End ----------
  ],
};

export default PlaywrightNavigation;
