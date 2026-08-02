import type { Subpage } from '@/types/navigation';

const Unit: Subpage = {
  name: 'Unit',
  subpages: [
    {
      name: 'Introduction',
      path: '/front-end/angular/testing/unit/introduction',
    }, // Basics
    {
      name: 'Components',
      path: '/front-end/angular/testing/unit/components',
    }, // TestBed, ComponentFixture
    {
      name: 'Services',
      path: '/front-end/angular/testing/unit/services',
    }, // HttpClientTestingModule, spies
  ],
};

export default Unit;