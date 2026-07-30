import type { Subpage } from '@/types/navigation';

const CoreConcepts: Subpage = {
  name: 'Core Concepts',
  subpages: [
    {
      name: 'Props',
      path: '/svelte/coreconcepts/props',
    },
    {
      name: 'Stores',
      path: '/svelte/coreconcepts/stores',
    },
    {
      name: 'Bindings',
      path: '/svelte/coreconcepts/bindings',
    },
    {
      name: 'Events',
      path: '/svelte/coreconcepts/events',
    },
  ],
};

export default CoreConcepts;