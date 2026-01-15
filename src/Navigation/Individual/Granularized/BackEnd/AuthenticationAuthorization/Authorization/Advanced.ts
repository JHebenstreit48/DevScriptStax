import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Systems & Design',
      subpages: [
        {
          name: 'Microservices',
          path: '/authz/advanced/design/microservices'
        },
        {
          name: 'SSO / Federation',
          path: '/authz/advanced/design/sso'
        },
        {
          name: 'Custom Providers',
          path: '/authz/advanced/design/custom'
        },
        {
          name: 'Scaling Systems',
          path: '/authz/advanced/design/scaling'
        }
      ]
    },
    {
      name: 'Audit & Control',
      subpages: [
        {
          name: 'Access Logging',
          path: '/authz/advanced/audit/logging'
        },
        {
          name: 'Fine-Grained Control',
          path: '/authz/advanced/audit/fine-grained'
        }
      ]
    }
  ]
};

export default Advanced;
