import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const EndToEnd: Subpage = {
  name: 'End-to-End (E2E)',
  subpages: [
    {
      name: 'Introduction',
      path: '/angular/testing/e2e/introduction',
    }, // Protractor, Cypress
    {
      name: 'Writing',
      path: '/angular/testing/e2e/writing',
    }, // Best practices
  ],
};

export default EndToEnd;