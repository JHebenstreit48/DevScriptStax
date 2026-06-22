import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Use Cases',
      subpages: [
        {
          name: 'Real-Time Chat',
          path: '/frameworks/websockets/advanced/use-cases/chat',
        },
        {
          name: 'Live Notifications & Updates',
          path: '/frameworks/websockets/advanced/use-cases/notifications',
        },
        {
          name: 'Collaborative Editing',
          path: '/frameworks/websockets/advanced/use-cases/collaboration',
        },
        {
          name: 'Live Data Feeds',
          path: '/frameworks/websockets/advanced/use-cases/live-data',
        },
      ],
    },
    {
      name: 'Security & Optimization',
      subpages: [
        {
          name: 'Security Best Practices',
          path: '/frameworks/websockets/advanced/security/best-practices',
        },
        {
          name: 'Authentication',
          path: '/frameworks/websockets/advanced/security/authentication',
        },
        {
          name: 'Scaling with Load Balancers',
          path: '/frameworks/websockets/advanced/security/scaling',
        },
        {
          name: 'Error Handling & Reconnects',
          path: '/frameworks/websockets/advanced/security/error-handling',
        },
      ],
    },
  ],
};

export default Advanced;