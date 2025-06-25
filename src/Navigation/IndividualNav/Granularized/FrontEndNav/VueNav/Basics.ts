import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const VueBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/vue/basics/intro'
        },
        {
          name: 'Vue CLI',
          path: '/vue/basics/cli'
        },
        {
          name: 'Syntax',
          path: '/vue/basics/syntax'
        },
        {
          name: 'Components',
          path: '/vue/basics/components'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Reactivity',
          path: '/vue/core/reactivity'
        },
        {
          name: 'Directives',
          path: '/vue/core/directives'
        },
        {
          name: 'Routing',
          path: '/vue/core/routing'
        },
        {
          name: 'State Management',
          path: '/vue/core/state-management'
        }
      ]
    }
  ]
};

export default VueBasics;