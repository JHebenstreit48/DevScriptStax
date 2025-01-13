import { Subpage } from "@/Navigation/NavigationTypes";

const CypressNavigation: Subpage = {
  name: "Cypress Testing",
  subpages: [
        {
          name: "Cypress Testing Notes",
          path: "/testing/e2e/cypress"
        },
        {
          name: "Cypress Testing Code Notes",
          path: "/testing/e2e/cypresscode",
        },
  ],
};

export default CypressNavigation;
