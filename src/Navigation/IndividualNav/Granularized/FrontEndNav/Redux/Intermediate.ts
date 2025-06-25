import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReduxIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Middleware & Async',
      subpages: [
        {
          name: 'Middleware',
          path: '/redux/intermediate/middleware'
        },
        {
          name: 'Asynchronous Actions',
          path: '/redux/intermediate/async'
        },
        {
          name: 'DevTools',
          path: '/redux/intermediate/devtools'
        }
      ]
    }
  ]
};

export default ReduxIntermediate;