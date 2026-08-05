import type { Subpage } from '@/types/navigation';

const Syntax: Subpage = {
  name: 'Syntax',
  subpages: [
    {
      name: 'Test Block Structure',
      path: '/e2e/cypress/basics/syntax/test-blocks',
    },
    {
      name: 'Selector Strategies',
      path: '/e2e/cypress/basics/syntax/selector-strategies',
    },
    {
      name: 'Commands & Querying',
      path: '/e2e/cypress/basics/syntax/commands-querying',
    },
    {
      name: 'Assertions',
      path: '/e2e/cypress/basics/syntax/assertions',
    },
    {
      name: 'Hooks & Lifecycle',
      path: '/e2e/cypress/basics/syntax/hooks-lifecycle',
    },
  ],
};

export default Syntax;