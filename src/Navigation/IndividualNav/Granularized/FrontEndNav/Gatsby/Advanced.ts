import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GatsbyAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Techniques',
      subpages: [
        {
          name: 'SSR / DSG',
          path: '/gatsby/advanced/ssr-dsg'
        },
        {
          name: 'Performance',
          path: '/gatsby/advanced/performance'
        },
        {
          name: 'Custom Plugins',
          path: '/gatsby/advanced/custom-plugins'
        },
        {
          name: 'Security',
          path: '/gatsby/advanced/security'
        }
      ]
    },
    {
      name: 'Deployment',
      subpages: [
        {
          name: 'Hosting Options',
          path: '/gatsby/deployment/hosting'
        },
        {
          name: 'Build / Deploy',
          path: '/gatsby/deployment/build-deploy'
        }
      ]
    }
  ]
};

export default GatsbyAdvanced;