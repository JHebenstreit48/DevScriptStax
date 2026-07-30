import type { Subpage } from '@/types/navigation';

const Cypress: Subpage = {
  name: 'Cypress',
  subpages: [
    {
      name: 'Core Commands',
      path: '/glossary/testing/end-to-end/cypress/core-commands',
    },
    {
      name: 'Test Structure',
      path: '/glossary/testing/end-to-end/cypress/test-structure',
    },
  ],
};

export default Cypress;