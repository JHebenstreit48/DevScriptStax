import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const SvelteBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Overview',
          path: '/svelte/basics/overview'
        },
        {
          name: 'Setup',
          path: '/svelte/basics/setup'
        },
        {
          name: 'Reactivity',
          path: '/svelte/basics/reactivity'
        },
        {
          name: 'Components',
          path: '/svelte/basics/components'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Props',
          path: '/svelte/coreconcepts/props'
        },
        {
          name: 'Stores',
          path: '/svelte/coreconcepts/stores'
        },
        {
          name: 'Bindings',
          path: '/svelte/coreconcepts/bindings'
        },
        {
          name: 'Events',
          path: '/svelte/coreconcepts/events'
        }
      ]
    }
  ]
};

export default SvelteBasics;