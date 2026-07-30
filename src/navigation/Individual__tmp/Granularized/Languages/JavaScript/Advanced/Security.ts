import type { Subpage } from '@/types/navigation';

const Security: Subpage = {
  name: 'Security',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Common Vulnerabilities',
          path: '/javascript/security/fundamentals/vulnerabilities',
        },
        {
          name: 'XSS and CSRF',
          path: '/javascript/security/fundamentals/xsscsrf',
        },
      ],
    },
    {
      name: 'Client-Side Protection',
      subpages: [
        {
          name: 'Content Security Policy (CSP)',
          path: '/javascript/security/protection/csp',
        },
        {
          name: 'CORS and SameSite Cookies',
          path: '/javascript/security/protection/corssamesite',
        },
      ],
    },
  ],
};

export default Security;