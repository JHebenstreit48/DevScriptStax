import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const CoreCommands: Subpage = {
  name: 'Core Commands',
  subpages: [
    {
      name: 'cy.visit() & cy.get()',
      path: '/testing/e2e/basics/cypress/commands/visit-get',
    },
    {
      name: 'cy.contains() & cy.find()',
      path: '/testing/e2e/basics/cypress/commands/contains-find',
    },
    {
      name: 'Assertions Overview',
      path: '/testing/e2e/basics/cypress/commands/assertions',
    },
  ],
};

export default CoreCommands;