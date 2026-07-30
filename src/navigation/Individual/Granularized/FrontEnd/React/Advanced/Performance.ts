import type { Subpage } from '@/types/navigation';

const Performance: Subpage = {
  name: 'Performance & Rendering',
  subpages: [
    {
      name: 'Performance Optimization',
      path: '/react/advanced/performance'
    },
    {
      name: 'Server-Side Rendering (SSR)',
      path: '/react/advanced/rendering/ssr'
    },
    {
      name: 'Static Site Generation (SSG)',
      path: '/react/advanced/rendering/ssg'
    },
    {
      name: 'Hybrid Rendering',
      path: '/react/advanced/rendering/hybrid'
    },
    {
      name: 'Error Boundaries',
      path: '/react/advanced/errorboundaries'
    }
  ]
};

export default Performance;