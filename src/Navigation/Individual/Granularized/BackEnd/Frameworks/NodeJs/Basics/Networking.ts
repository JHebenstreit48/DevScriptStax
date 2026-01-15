import type { Subpage } from '@/types/navigation';

const Networking: Subpage = {
  name: 'Networking (Core)',
  subpages: [
    {
      name: 'HTTP Server',
      path: '/frameworks/nodejs/basics/networking-core/http-server',
    },
    {
      name: 'HTTP Client',
      path: '/frameworks/nodejs/basics/networking-core/http-client',
    },
  ],
};

export default Networking;