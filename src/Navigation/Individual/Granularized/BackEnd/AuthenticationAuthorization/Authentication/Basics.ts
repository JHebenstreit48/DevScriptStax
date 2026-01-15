import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/authentication/basics/fundamentals/intro',
        },
        {
          name: 'Session vs Token',
          path: '/authentication/basics/fundamentals/session-vs-token',
        },
        {
          name: 'Stateful vs Stateless',
          path: '/authentication/basics/fundamentals/stateful-vs-stateless',
        },
        {
          name: 'MFA',
          path: '/authentication/basics/fundamentals/mfa',
        },
        {
          name: 'Password Storage',
          path: '/authentication/basics/fundamentals/passwords',
        },
      ],
    },
    {
      name: 'Methods',
      subpages: [
        {
          name: 'Sessions',
          path: '/authentication/basics/methods/sessions',
        },
        {
          name: 'JWT',
          path: '/authentication/basics/methods/jwt',
        },
        {
          name: 'API Keys',
          path: '/authentication/basics/methods/api-keys',
        },
      ],
    },
  ],
};

export default Basics;