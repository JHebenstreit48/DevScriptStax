import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AngularTesting: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'Unit Testing',
      subpages: [
        {
          name: 'Introduction to Unit Testing',
          path: '/angular/testing/unit-testing'
        }, // Basics
        {
          name: 'Testing Components',
          path: '/angular/testing/component-testing'
        }, // TestBed, ComponentFixture
        {
          name: 'Testing Services',
          path: '/angular/testing/service-testing'
        } // HttpClientTestingModule, spies
      ]
    },
    {
      name: 'End-to-End (E2E) Testing',
      subpages: [
        {
          name: 'Introduction to E2E Testing',
          path: '/angular/testing/e2e-testing'
        }, // Protractor, Cypress
        {
          name: 'Writing E2E Tests',
          path: '/angular/testing/writing-e2e-tests'
        } // Best practices
      ]
    }
  ]
};

export default AngularTesting;
