import type { Subpage } from '@/types/navigation';

const CoreConcepts: Subpage = {
  name: 'Core Concepts',
  subpages: [
    {
      name: 'Static Generation (SSG)',
      path: '/nextjs/core-concepts/static-generation',
    },
    {
      name: 'Server-Side Rendering (SSR)',
      path: '/nextjs/core-concepts/server-side-rendering',
    },
    {
      name: 'Client-Side Rendering (CSR)',
      path: '/nextjs/core-concepts/client-side-rendering',
    },
    {
      name: 'Middleware',
      path: '/nextjs/core-concepts/middleware',
    },
  ],
};

export default CoreConcepts;