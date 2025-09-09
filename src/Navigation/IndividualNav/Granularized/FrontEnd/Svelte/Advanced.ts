import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const SvelteAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Advanced Concepts',
      subpages: [
        {
          name: 'Transitions',
          path: '/svelte/advanced/transitions'
        },
        {
          name: 'Animations',
          path: '/svelte/advanced/animations'
        },
        {
          name: 'Server-Side Rendering',
          path: '/svelte/advanced/ssr'
        },
        {
          name: 'Context API',
          path: '/svelte/advanced/contextapi'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Code Organization',
          path: '/svelte/bestpractices/codeorganization'
        },
        {
          name: 'Performance Optimization',
          path: '/svelte/bestpractices/performance'
        }
      ]
    }
  ]
};

export default SvelteAdvanced;