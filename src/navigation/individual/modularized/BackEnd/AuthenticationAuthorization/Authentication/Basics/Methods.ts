import type { Subpage } from '@/types/navigation';

const Methods: Subpage = {
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
};

export default Methods;