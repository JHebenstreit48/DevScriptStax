import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AuthenticationAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Web Frameworks',
      subpages: [
        {
          name: 'Node / Express',
          path: '/auth/advanced/frameworks/node-express'
        },
        {
          name: 'Next.js / React',
          path: '/auth/advanced/frameworks/nextjs-react'
        },
        {
          name: 'Django / Flask',
          path: '/auth/advanced/frameworks/django-flask'
        },
        {
          name: 'Laravel / PHP',
          path: '/auth/advanced/frameworks/laravel-php'
        },
        {
          name: 'ASP.NET',
          path: '/auth/advanced/frameworks/aspnet'
        }
      ]
    },
    {
      name: 'Security',
      subpages: [
        {
          name: 'Brute Force',
          path: '/auth/advanced/security/bruteforce'
        },
        {
          name: 'Hijacking / CSRF',
          path: '/auth/advanced/security/hijacking-csrf'
        },
        {
          name: 'Credential Stuffing',
          path: '/auth/advanced/security/credentialstuffing'
        },
        {
          name: 'Passwordless',
          path: '/auth/advanced/security/passwordless'
        },
        {
          name: 'Zero Trust',
          path: '/auth/advanced/security/zerotrust'
        }
      ]
    }
  ]
};

export default AuthenticationAdvanced;
