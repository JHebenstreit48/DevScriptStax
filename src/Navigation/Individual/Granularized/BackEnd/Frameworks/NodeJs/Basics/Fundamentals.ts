import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/frameworks/nodejs/basics/fundamentals/introduction',
    },
    {
      name: 'Event Loop & Async I/O',
      path: '/frameworks/nodejs/basics/fundamentals/event-loop-async-io',
    },
    {
      name: 'Runtime & Globals',
      path: '/frameworks/nodejs/basics/fundamentals/runtime-globals',
    },
  ],
};

export default Fundamentals;