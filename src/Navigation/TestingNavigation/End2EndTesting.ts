import { Subpage } from "@/Navigation/NavigationTypes";

const E2ETestingNavigation: Subpage = {
  name: "End To End Testing",
  subpages: [
    {
      name: "Cypress Testing",
      subpages: [
        { name: "Cypress Testing Notes", path: "/testing/e2e/cypress" },
        {
          name: "Cypress Testing Code Notes",
          path: "/testing/e2e/cypresscode",
        },
      ],
    },
    {
      name: "Playwright",
      subpages: [
        { name: "Playwright Notes", path: "/testing/e2e/playwright" },
        { name: "Playwright Code Notes", path: "/testing/e2e/playwrightcode" },
      ],
    },
  ],
};

export default E2ETestingNavigation;
