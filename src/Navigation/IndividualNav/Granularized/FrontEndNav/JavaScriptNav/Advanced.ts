import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const JSAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Functions',
      subpages: [
        {
          name: 'Closures',
          path: '/javascript/advanced/functions/closures'
        },
        {
          name: 'Callbacks',
          path: '/javascript/advanced/functions/callbacks'
        }
      ]
    },
    {
      name: 'Object-Oriented JS',
      subpages: [
        {
          name: 'Prototype and Inheritance',
          path: '/javascript/advanced/oop/prototypeinheritance'
        },
        {
          name: 'Classes (ES6+)',
          path: '/javascript/advanced/oop/classes'
        }
      ]
    },
    {
      name: 'Modules',
      subpages: [
        {
          name: 'Overview',
          path: '/javascript/advanced/modules/overview'
        },
        {
          name: 'Import/Export Syntax',
          path: '/javascript/advanced/modules/syntax'
        },
        {
          name: 'Dynamic Imports/Lazy Loading',
          path: '/javascript/advanced/modules/dynamic'
        },
        {
          name: 'Paths/Aliases',
          path: '/javascript/advanced/modules/paths'
        }
      ]
    },
    {
      name: 'Performance and Memory',
      subpages: [
        {
          name: 'Performance Optimization',
          path: '/javascript/advanced/performance/optimization'
        },
        {
          name: 'Memory Management',
          path: '/javascript/advanced/performance/memory'
        }
      ]
    }
  ]
};

export default JSAdvanced;
