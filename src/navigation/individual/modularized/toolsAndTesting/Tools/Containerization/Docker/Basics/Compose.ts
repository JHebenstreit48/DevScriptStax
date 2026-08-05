import type { Subpage } from '@/types/navigation';

const Compose: Subpage = {
  name: 'Compose',
  subpages: [
    {
      name: 'Introduction',
      path: '/docker/basics/compose/introduction',
    },
    {
      name: 'Syntax',
      path: '/docker/basics/compose/syntax',
    },
    {
      name: 'Multi-Container Apps',
      path: '/docker/basics/compose/multi-container',
    },
    {
      name: 'Scaling / Load Balancing',
      path: '/docker/basics/compose/scaling-and-load',
    },
  ],
};

export default Compose;