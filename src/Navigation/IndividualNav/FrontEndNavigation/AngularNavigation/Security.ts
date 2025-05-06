import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AngularSecurityNavigation: Subpage = {
  name: 'Security',
  subpages: [
    {
      name: 'Security Best Practices',
      subpages: [
        {
          name: 'Understanding Angular Security',
          path: '/angular/security/bestpractices'
        }, // Overview
        {
          name: 'Preventing XSS Attacks',
          path: '/angular/security/xss'
        }, // Sanitization, DomSanitizer
        {
          name: 'Preventing CSRF Attacks',
          path: '/angular/security/csrf'
        } // CSRF tokens
      ]
    },
    {
      name: 'Authentication & Authorization',
      subpages: [
        {
          name: 'Implementing Authentication',
          path: '/angular/security/authentication'
        }, // JWT, OAuth
        {
          name: 'Role-Based Access Control (RBAC)',
          path: '/angular/security/rbac'
        } // Guards, interceptors
      ]
    }
  ]
};

export default AngularSecurityNavigation;
