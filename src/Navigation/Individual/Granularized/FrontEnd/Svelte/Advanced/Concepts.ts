import type { Subpage } from '@/types/navigation';

const Concepts: Subpage = {
  name: 'Concepts',
  subpages: [
    {
      name: 'Transitions',
      path: '/svelte/advanced/transitions',
    },
    {
      name: 'Animations',
      path: '/svelte/advanced/animations',
    },
    {
      name: 'Server-Side Rendering',
      path: '/svelte/advanced/ssr',
    },
    {
      name: 'Context API',
      path: '/svelte/advanced/context-api',
    },
  ],
};

export default Concepts;