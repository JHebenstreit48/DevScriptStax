import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Syntax: Subpage = {
  name: 'Syntax',
  subpages: [
    {
      name: 'Test Block Structure',
      path: '/testing/e2e/cypress/syntax/test-blocks',
    },
    {
      name: 'Selector Strategies',
      path: '/testing/e2e/cypress/syntax/selector-strategies',
    },
    {
      name: 'Assertions',
      path: '/testing/e2e/cypress/syntax/assertions',
    },
    {
      name: 'Commands & Chaining',
      path: '/testing/e2e/cypress/syntax/commands-chaining',
    },
    {
      name: 'Hooks & Lifecycle',
      path: '/testing/e2e/cypress/syntax/hooks-lifecycle',
    },
  ],
};

export default Syntax;