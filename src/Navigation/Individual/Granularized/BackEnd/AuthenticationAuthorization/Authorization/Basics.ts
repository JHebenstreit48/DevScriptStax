import type { Subpage } from '@/types/navigation';

const AuthorizationBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/authorization/basics/fundamentals/intro'
        },
        {
          name: 'RBAC',
          path: '/authorization/basics/fundamentals/rbac'
        },
        {
          name: 'PBAC',
          path: '/authorization/basics/fundamentals/pbac'
        },
        {
          name: 'JWT / Claims',
          path: '/authorization/basics/fundamentals/jwt'
        },
        {
          name: 'OAuth Scopes',
          path: '/authorization/basics/fundamentals/oauth-scopes'
        }
      ]
    },
    {
      name: 'Policies & Access',
      subpages: [
        {
          name: 'Static / Dynamic Rules',
          path: '/authorization/basics/policies/static-dynamic'
        },
        {
          name: 'Hierarchical Roles',
          path: '/authorization/basics/policies/roles-hierarchy'
        }
      ]
    }
  ]
};

export default AuthorizationBasics;
