import type { Subpage } from '@/types/navigation';

const Routing: Subpage = {
  name: 'Routing',
  subpages: [
    {
      name: 'Basic Routing',
      path: '/react/intermediate/routing/basic'
    },
    {
      name: 'Nested & Dynamic Routes',
      path: '/react/intermediate/routing/nested'
    },
    {
      name: 'Lazy Loading with Suspense',
      path: '/react/intermediate/routing/lazy'
    }
  ]
};

export default Routing;