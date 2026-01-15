import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/testing/e2e/cypress/basics/fundamentals/introduction',
    },
    {
      name: 'Setup & Installation',
      path: '/testing/e2e/cypress/basics/fundamentals/setup',
    },
    {
      name: 'Running Tests & Modes',
      path: '/testing/e2e/cypress/basics/fundamentals/first-test',
    },
  ],
};

export default Fundamentals;