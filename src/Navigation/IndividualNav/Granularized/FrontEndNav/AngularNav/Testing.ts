import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AngularTesting: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'Unit',
      subpages: [
        {
          name: 'Introduction',
          path: '/angular/testing/unit'
        }, // Basics
        {
          name: 'Components',
          path: '/angular/testing/components'
        }, // TestBed, ComponentFixture
        {
          name: 'Services',
          path: '/angular/testing/services'
        } // HttpClientTestingModule, spies
      ]
    },
    {
      name: 'End-to-End (E2E)',
      subpages: [
        {
          name: 'Introduction',
          path: '/angular/testing/e2e'
        }, // Protractor, Cypress
        {
          name: 'Writing',
          path: '/angular/testing/writing'
        } // Best practices
      ]
    }
  ]
};

export default AngularTesting;
