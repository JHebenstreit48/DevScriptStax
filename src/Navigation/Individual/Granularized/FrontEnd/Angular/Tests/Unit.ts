import type { Subpage } from '@/types/navigation';

const Unit: Subpage = {
  name: 'Unit',
  subpages: [
    {
      name: 'Introduction',
      path: '/angular/testing/unit/introduction',
    }, // Basics
    {
      name: 'Components',
      path: '/angular/testing/unit/components',
    }, // TestBed, ComponentFixture
    {
      name: 'Services',
      path: '/angular/testing/unit/services',
    }, // HttpClientTestingModule, spies
  ],
};

export default Unit;