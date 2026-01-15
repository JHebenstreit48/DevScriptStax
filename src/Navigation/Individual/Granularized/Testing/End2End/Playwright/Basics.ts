import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/testing/e2e/playwright/basics/fundamentals/intro"
        },
        {
          name: "Install & Setup",
          path: "/testing/e2e/playwright/basics/fundamentals/install-setup"
        },
        {
          name: "First Test",
          path: "/testing/e2e/playwright/basics/fundamentals/first-test"
        },
        {
          name: "vs Cypress",
          path: "/testing/e2e/playwright/basics/fundamentals/vs-cypress"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Locators & Selectors",
          path: "/testing/e2e/playwright/basics/authoring/selectors"
        },
        {
          name: "UI Interactions",
          path: "/testing/e2e/playwright/basics/authoring/ui-interactions"
        }
      ]
    },
    {
      name: "Fixtures & Network",
      subpages: [
        {
          name: "Fixtures",
          path: "/testing/e2e/playwright/basics/fixtures-network/fixtures"
        },
        {
          name: "API Mocking",
          path: "/testing/e2e/playwright/basics/fixtures-network/api-mocking"
        }
      ]
    },
    {
      name: "Running",
      subpages: [
        {
          name: "CLI & Config",
          path: "/testing/e2e/playwright/basics/running/cli-config"
        },
        {
          name: "UI Mode & Headless",
          path: "/testing/e2e/playwright/basics/running/ui-mode-headless"
        }
      ]
    }
  ]
};

export default Basics;