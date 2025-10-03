import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Web Frameworks',
      subpages: [
        {
          name: 'Node / Express',
          path: '/authentication/advanced/web-frameworks/node-express'
        },
        {
          name: 'Next.js / React',
          path: '/authentication/advanced/web-frameworks/nextjs-react'
        },
        {
          name: 'Django / Flask',
          path: '/authentication/advanced/web-frameworks/django-flask'
        },
        {
          name: 'Laravel / PHP',
          path: '/authentication/advanced/web-frameworks/laravel-php'
        },
        {
          name: 'ASP.NET',
          path: '/authentication/advanced/web-frameworks/aspnet'
        }
      ]
    },
    {
      name: 'Security',
      subpages: [
        {
          name: 'Brute Force',
          path: '/authentication/advanced/security/brute-force'
        },
        {
          name: 'Hijacking / CSRF',
          path: '/authentication/advanced/security/hijacking-csrf'
        },
        {
          name: 'Credential Stuffing',
          path: '/authentication/advanced/security/credential-stuffing'
        },
        {
          name: 'Passwordless',
          path: '/authentication/advanced/security/passwordless'
        },
        {
          name: 'Zero Trust',
          path: '/authentication/advanced/security/zero-trust'
        }
      ]
    }
  ]
};

export default Advanced;
