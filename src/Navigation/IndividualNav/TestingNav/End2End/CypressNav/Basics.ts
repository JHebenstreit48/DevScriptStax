import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CypressBasics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction to Cypress",
          path: "/testing/e2e/cypress/intro"
        },
        {
          name: "Setup & Installation",
          path: "/testing/e2e/cypress/setup"
        },
        {
          name: "Running Tests & Modes",
          path: "/testing/e2e/cypress/first-test"
        }
      ]
    },
    {
      name: "Project Structure & CLI",
      subpages: [
        {
          name: "Project Structure",
          path: "/testing/e2e/cypress/project-structure"
        },
        {
          name: "Cypress CLI & Configuration",
          path: "/testing/e2e/cypress/cli-config"
        },
        {
          name: "Test File Patterns",
          path: "/testing/e2e/cypress/file-patterns"
        }
      ]
    },
    {
        name: "Syntax & Structure",
        subpages: [
          {
            name: "Test Block Structure",
            path: "/testing/e2e/cypress/syntax/testblocks"
          },
          {
            name: "Selector Strategies",
            path: "/testing/e2e/cypress/syntax/selector-strategies"
          }
        ]
      },      
    {
      name: "Core Commands",
      subpages: [
        {
          name: "cy.visit() & cy.get()",
          path: "/testing/e2e/cypress/commands/visitget"
        },
        {
          name: "cy.contains() & cy.find()",
          path: "/testing/e2e/cypress/commands/containsfind"
        },
        {
          name: "Assertions Overview",
          path: "/testing/e2e/cypress/commands/assertions"
        }
      ]
    }
  ]
};

export default CypressBasics;
