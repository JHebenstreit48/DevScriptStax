import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const CypressAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Test Optimization",
      subpages: [
        {
          name: "Parallel Test Execution",
          path: "/testing/e2e/cypress/parallel-execution"
        },
        {
          name: "Performance Testing with Cypress",
          path: "/testing/e2e/cypress/performance"
        },
        {
          name: "Best Practices in Cypress",
          path: "/testing/e2e/cypress/best-practices"
        }
      ]
    },
    {
      name: "CI/CD Integration",
      subpages: [
        {
          name: "Cypress & Continuous Integration",
          path: "/testing/e2e/cypress/ci-integration"
        },
        {
          name: "Using Cypress with CircleCI",
          path: "/testing/e2e/cypress/circleci"
        },
        {
          name: "GitHub Actions & Other Runners",
          path: "/testing/e2e/cypress/github-actions"
        }
      ]
    },
    {
      name: "Advanced Scenarios",
      subpages: [
        {
          name: "Multi-Domain Testing",
          path: "/testing/e2e/cypress/multidomain"
        },
        {
          name: "File Uploads & Downloads",
          path: "/testing/e2e/cypress/file-uploads"
        },
        {
          name: "Working with iframes",
          path: "/testing/e2e/cypress/iframes"
        }
      ]
    }
  ]
};

export default CypressAdvanced;

