import type { Subpage } from '@/types/navigation';

const Routing: Subpage = {
  name: 'Routing',
  subpages: [
    {
      name: 'Redirects',
      path: '/cloudflare-pages/basics/routing/redirects',
    },
    {
      name: 'Headers & CORS',
      path: '/cloudflare-pages/basics/routing/headers-cors',
    },
  ],
};

export default Routing;