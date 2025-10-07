import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Security: Subpage = {
  name: 'Security',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Basics',
          path: '/angular/advanced/security/fundamentals/basics',
        },
        {
          name: 'XSS Protection',
          path: '/angular/advanced/security/fundamentals/xss-protection',
        },
        {
          name: 'CSRF Protection',
          path: '/angular/advanced/security/fundamentals/csrf-protection',
        },
      ],
    },
    {
      name: 'Authentication & Authorization',
      subpages: [
        {
          name: 'Implementing Authentication',
          path: '/angular/advanced/security/authentication-and-authorization/authentication',
        }, // JWT, OAuth
        {
          name: 'Role-Based Access Control (RBAC)',
          path: '/angular/advanced/security/authentication-and-authorization/rbac',
        }, // Guards, interceptors
      ],
    },
  ],
};

export default Security;