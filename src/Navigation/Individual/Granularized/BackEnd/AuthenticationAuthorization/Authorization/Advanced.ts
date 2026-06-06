import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Systems & Design',
      subpages: [
        {
          name: 'Microservices',
          path: '/authorization/advanced/design/microservices'
        },
        {
          name: 'SSO / Federation',
          path: '/authorization/advanced/design/sso'
        },
        {
          name: 'Custom Providers',
          path: '/authorization/advanced/design/custom'
        },
        {
          name: 'Scaling Systems',
          path: '/authorization/advanced/design/scaling'
        }
      ]
    },
    {
      name: 'Audit & Control',
      subpages: [
        {
          name: 'Access Logging',
          path: '/authorization/advanced/audit/logging'
        },
        {
          name: 'Fine-Grained Control',
          path: '/authorization/advanced/audit/fine-grained'
        }
      ]
    }
  ]
};

export default Advanced;
