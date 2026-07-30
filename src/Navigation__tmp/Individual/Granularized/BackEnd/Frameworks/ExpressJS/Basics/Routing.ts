import type { Subpage } from '@/types/navigation';

const Routing: Subpage = {
  name: 'Routing',
  subpages: [
    {
      name: 'Routes',
      path: '/frameworks/express/basics/routing/routes',
    },
    {
      name: 'Params & Query',
      path: '/frameworks/express/basics/routing/params-query',
    },
    {
      name: 'Error Handling',
      path: '/frameworks/express/basics/routing/error-handling',
    },
  ],
};

export default Routing;