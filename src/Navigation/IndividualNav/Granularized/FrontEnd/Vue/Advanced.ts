import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const VueAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Framework Features',
      subpages: [
        {
          name: 'Composition API',
          path: '/vue/advanced/composition-api'
        },
        {
          name: 'Mixins',
          path: '/vue/advanced/mixins'
        },
        {
          name: 'Transitions',
          path: '/vue/advanced/transitions'
        },
        {
          name: 'Server-Side Rendering',
          path: '/vue/advanced/ssr'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Performance Optimization',
          path: '/vue/best-practices/performance'
        },
        {
          name: 'Folder Structure',
          path: '/vue/best-practices/structure'
        },
        {
          name: 'Scalability',
          path: '/vue/best-practices/scalability'
        }
      ]
    }
  ]
};

export default VueAdvanced;