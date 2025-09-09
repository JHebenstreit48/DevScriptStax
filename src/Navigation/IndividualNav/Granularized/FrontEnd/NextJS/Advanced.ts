import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const NextJSAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Advanced Features',
      subpages: [
        {
          name: 'Incremental Static Regeneration (ISR)',
          path: '/nextjs/advanced/isr'
        },
        {
          name: 'Image Optimization',
          path: '/nextjs/advanced/image-optimization'
        },
        {
          name: 'API Integrations',
          path: '/nextjs/advanced/api-integrations'
        },
        {
          name: 'Custom Server',
          path: '/nextjs/advanced/custom-server'
        }
      ]
    },
    {
      name: 'Deployment',
      subpages: [
        {
          name: 'Vercel',
          path: '/nextjs/deployment/vercel'
        },
        {
          name: 'Custom Platforms',
          path: '/nextjs/deployment/custom-platforms'
        }
      ]
    }
  ]
};

export default NextJSAdvanced;