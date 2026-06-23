import type { Subpage } from '@/types/navigation';

const Cypress: Subpage = {
  name: 'Cypress',
  subpages: [
    {
      name: 'Core Commands',
      path: '/glossary/testing/cypress/core-commands',
    },
    {
      name: 'Test Structure',
      path: '/glossary/testing/cypress/test-structure',
    },
  ],
};

export default Cypress;