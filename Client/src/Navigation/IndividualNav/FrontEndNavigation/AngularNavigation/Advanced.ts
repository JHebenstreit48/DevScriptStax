import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AngularAdvancedNavigation: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Change Detection',
      subpages: [
        {
          name: 'Understanding Change Detection',
          path: '/angular/advanced/change-detection'
        }, // Basics
        {
          name: 'Optimizing Change Detection',
          path: '/angular/advanced/change-detection-performance'
        },
        {
          name: 'Optimizing Template Rendering',
          path: '/angular/advanced/change-detection/template-optimization'
        }
      ]
    },
    {
      name: 'Performance & Bundle Optimization', // ✅ NEW SECTION
      subpages: [
        {
          name: 'Reducing Bundle Size',
          path: '/angular/advanced/performance/bundle-size'
        }
      ]
    },
    {
      name: 'RxJS & Reactive Programming',
      subpages: [
        {
          name: 'Understanding Observables',
          path: '/angular/advanced/rxjs-observables'
        }, // Basics
        {
          name: 'Subjects & BehaviorSubjects',
          path: '/angular/advanced/rxjs-subjects'
        }, // Advanced RxJS
        {
          name: 'RxJS Operators',
          path: '/angular/advanced/rxjs-operators'
        } // map, filter, switchMap
      ]
    },
    {
      name: 'Animations',
      subpages: [
        {
          name: 'Angular Animations Basics',
          path: '/angular/advanced/animations'
        }, // Overview
        {
          name: 'Using Animation Triggers',
          path: '/angular/advanced/animations-triggers'
        } // keyframes, transitions
      ]
    },
    {
      name: 'Path Aliases & TypeScript Config',
      subpages: [
        {
          name: 'Understanding Path Aliases',
          path: '/angular/advanced/path-aliases'
        }, // tsconfig.json setup
        {
          name: 'Advanced Path Aliases Usage',
          path: '/angular/advanced/advanced-path-aliases'
        } // Multiple aliases, best practices
      ]
    }
  ]
};

export default AngularAdvancedNavigation;
