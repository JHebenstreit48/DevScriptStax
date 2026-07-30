import type { Subpage } from '@/types/navigation';

const FrameworkFeatures: Subpage = {
  name: 'Framework Features',
  subpages: [
    {
      name: 'Composition API',
      path: '/vue/advanced/composition-api',
    },
    {
      name: 'Mixins',
      path: '/vue/advanced/mixins',
    },
    {
      name: 'Transitions',
      path: '/vue/advanced/transitions',
    },
    {
      name: 'Server-Side Rendering',
      path: '/vue/advanced/ssr',
    },
  ],
};

export default FrameworkFeatures;