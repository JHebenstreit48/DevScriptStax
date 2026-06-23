import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/e2e/cypress/basics/fundamentals/introduction',
    },
    {
      name: 'Setup & Installation',
      path: '/e2e/cypress/basics/fundamentals/setup',
    },
    {
      name: 'Writing Your First Test',
      path: '/e2e/cypress/basics/fundamentals/first-test',
    },
  ],
};

export default Fundamentals;