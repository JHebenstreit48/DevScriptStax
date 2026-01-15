import type { Subpage } from '@/types/navigation';

const AuthorizationBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/authz/basics/fundamentals/intro'
        },
        {
          name: 'RBAC',
          path: '/authz/basics/fundamentals/rbac'
        },
        {
          name: 'PBAC',
          path: '/authz/basics/fundamentals/pbac'
        },
        {
          name: 'JWT / Claims',
          path: '/authz/basics/fundamentals/jwt'
        },
        {
          name: 'OAuth Scopes',
          path: '/authz/basics/fundamentals/oauth-scopes'
        }
      ]
    },
    {
      name: 'Policies & Access',
      subpages: [
        {
          name: 'Static / Dynamic Rules',
          path: '/authz/basics/policies/static-dynamic'
        },
        {
          name: 'Hierarchical Roles',
          path: '/authz/basics/policies/roles-hierarchy'
        }
      ]
    }
  ]
};

export default AuthorizationBasics;
