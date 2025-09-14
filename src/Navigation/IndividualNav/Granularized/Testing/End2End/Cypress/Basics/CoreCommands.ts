import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const CoreCommands: Subpage = {
  name: 'Core Commands',
  subpages: [
    {
      name: 'cy.visit() & cy.get()',
      path: '/testing/e2e/cypress/commands/visit-get',
    },
    {
      name: 'cy.contains() & cy.find()',
      path: '/testing/e2e/cypress/commands/contains-find',
    },
    {
      name: 'Assertions Overview',
      path: '/testing/e2e/cypress/commands/assertions',
    },
  ],
};

export default CoreCommands;