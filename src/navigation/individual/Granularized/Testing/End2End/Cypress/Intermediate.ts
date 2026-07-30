import type { Subpage } from '@/types/navigation';

const CypressIntermediate: Subpage = {
  name: "Intermediate",
  subpages: [
    {
      name: "Test Writing Patterns",
      subpages: [
        {
          name: "Selectors & Assertions",
          path: "/testing/e2e/cypress/selectors"
        },
        {
          name: "Handling UI Events",
          path: "/testing/e2e/cypress/ui-events"
        },
        {
          name: "Working with Fixtures",
          path: "/testing/e2e/cypress/fixtures"
        },
        {
          name: "Mocking API Responses",
          path: "/testing/e2e/cypress/mocking"
        },
        {
          name: "Custom Cypress Commands",
          path: "/testing/e2e/cypress/custom-commands"
        }
      ]
    },
    {
      name: "Utilities & Navigation",
      subpages: [
        {
          name: "Aliasing Elements & Requests",
          path: "/testing/e2e/cypress/aliasing"
        },
        {
          name: "Waiting & Timeouts",
          path: "/testing/e2e/cypress/waiting"
        },
        {
          name: "Debugging & Logging",
          path: "/testing/e2e/cypress/debugging"
        }
      ]
    },
    {
      name: "Organizing Tests",
      subpages: [
        {
          name: "Test Hooks (before, after, each)",
          path: "/testing/e2e/cypress/hooks"
        },
        {
          name: "Test Suites & Structure",
          path: "/testing/e2e/cypress/suites"
        },
        {
          name: "Using Tags and Filters",
          path: "/testing/e2e/cypress/tags"
        }
      ]
    }
  ]
};

export default CypressIntermediate;
