import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/frameworks/websockets/basics/fundamentals/introduction',
        },
        {
          name: 'WebSockets vs HTTP',
          path: '/frameworks/websockets/basics/fundamentals/websockets-vs-http',
        },
        {
          name: 'How WebSockets Work',
          path: '/frameworks/websockets/basics/fundamentals/how-it-works',
        },
        {
          name: 'WebSocket API Basics',
          path: '/frameworks/websockets/basics/fundamentals/api-basics',
        },
      ],
    },
    {
      name: 'Implementation',
      subpages: [
        {
          name: 'WebSockets in JavaScript',
          path: '/frameworks/websockets/basics/implementation/javascript',
        },
        {
          name: 'WebSockets in Node.js',
          path: '/frameworks/websockets/basics/implementation/nodejs',
        },
        {
          name: 'WebSockets in Python',
          path: '/frameworks/websockets/basics/implementation/python',
        },
        {
          name: 'WebSockets in Java',
          path: '/frameworks/websockets/basics/implementation/java',
        },
      ],
    },
  ],
};

export default Basics;