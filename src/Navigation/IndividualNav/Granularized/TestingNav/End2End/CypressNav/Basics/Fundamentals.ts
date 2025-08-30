import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/testing/e2e/cypress/introduction',
    },
    {
      name: 'Setup & Installation',
      path: '/testing/e2e/cypress/setup',
    },
    {
      name: 'Running Tests & Modes',
      path: '/testing/e2e/cypress/first-test',
    },
  ],
};

export default Fundamentals;