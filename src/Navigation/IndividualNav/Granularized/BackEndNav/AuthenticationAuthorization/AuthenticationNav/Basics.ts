import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AuthenticationBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/auth/basics/fundamentals/intro'
        },
        {
          name: 'Session vs Token',
          path: '/auth/basics/fundamentals/session-vs-token'
        },
        {
          name: 'Stateful vs Stateless',
          path: '/auth/basics/fundamentals/stateful-vs-stateless'
        },
        {
          name: 'MFA',
          path: '/auth/basics/fundamentals/mfa'
        },
        {
          name: 'Password Storage',
          path: '/auth/basics/fundamentals/passwords'
        }
      ]
    },
    {
      name: 'Methods',
      subpages: [
        {
          name: 'Sessions',
          path: '/auth/basics/methods/sessions'
        },
        { name: 'JWT', path: '/auth/basics/methods/jwt' },
        {
          name: 'API Keys',
          path: '/auth/basics/methods/api-keys'
        }
      ]
    }
  ]
};

export default AuthenticationBasics;
