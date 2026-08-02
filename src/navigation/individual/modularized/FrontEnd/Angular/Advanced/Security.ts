import type { Subpage } from '@/types/navigation';

const Security: Subpage = {
  name: 'Security',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Basics',
          path: '/front-end/angular/advanced/security/fundamentals/basics',
        },
        {
          name: 'XSS Protection',
          path: '/front-end/angular/advanced/security/fundamentals/xss-protection',
        },
        {
          name: 'CSRF Protection',
          path: '/front-end/angular/advanced/security/fundamentals/csrf-protection',
        },
      ],
    },
    {
      name: 'Authentication & Authorization',
      subpages: [
        {
          name: 'Implementing Authentication',
          path: '/front-end/angular/advanced/security/authentication-and-authorization/authentication',
        }, // JWT, OAuth
        {
          name: 'Role-Based Access Control (RBAC)',
          path: '/front-end/angular/advanced/security/authentication-and-authorization/rbac',
        }, // Guards, interceptors
      ],
    },
  ],
};

export default Security;