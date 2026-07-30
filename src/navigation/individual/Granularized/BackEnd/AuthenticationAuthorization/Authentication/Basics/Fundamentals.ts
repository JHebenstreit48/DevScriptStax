import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/authentication/basics/fundamentals/introduction',
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
      path: '/authentication/basics/fundamentals/password-storage',
    },
  ],
};

export default Fundamentals;