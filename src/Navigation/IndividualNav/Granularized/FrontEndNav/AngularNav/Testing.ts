import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AngularTesting: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'Unit',
      subpages: [
        {
          name: 'Introduction',
          path: '/angular/testing/unit/introduction'
        }, // Basics
        {
          name: 'Components',
          path: '/angular/testing/unit/components'
        }, // TestBed, ComponentFixture
        {
          name: 'Services',
          path: '/angular/testing/unit/services'
        } // HttpClientTestingModule, spies
      ]
    },
    {
      name: 'End-to-End (E2E)',
      subpages: [
        {
          name: 'Introduction',
          path: '/angular/testing/e2e/introduction'
        }, // Protractor, Cypress
        {
          name: 'Writing',
          path: '/angular/testing/e2e/writing'
        } // Best practices
      ]
    }
  ]
};

export default AngularTesting;
