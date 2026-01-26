import type { Subpage } from '@/types/navigation';

const WebSocketsNavigation: Subpage = {
  name: 'WebSockets',
  subpages: [
    // ---------- WebSockets Fundamentals Navigation Start ----------
    {
      name: 'WebSockets Fundamentals',
      subpages: [
        { name: 'Introduction to WebSockets', path: '/frameworks/websockets/intro' },
        { name: 'WebSockets vs HTTP', path: '/frameworks/websockets/websockets-vs-http' },
        { name: 'How WebSockets Work', path: '/frameworks/websockets/how-it-works' },
        { name: 'WebSocket API Basics', path: '/frameworks/websockets/api-basics' },
      ],
    },
    // ---------- WebSockets Fundamentals Navigation End ----------

    // ---------- WebSockets Implementation Navigation Start ----------
    {
      name: 'Implementing WebSockets',
      subpages: [
        { name: 'WebSockets in JavaScript', path: '/frameworks/websockets/javascript' },
        { name: 'WebSockets in Node.js (ws Library)', path: '/frameworks/websockets/nodejs' },
        { name: 'WebSockets in Python (WebSocket API)', path: '/frameworks/websockets/python' },
        { name: 'WebSockets in Java (Spring Boot)', path: '/frameworks/websockets/java' },
      ],
    },
    // ---------- WebSockets Implementation Navigation End ----------

    // ---------- WebSockets Use Cases Navigation Start ----------
    {
      name: 'WebSockets Use Cases',
      subpages: [
        { name: 'Real-time Chat Applications', path: '/frameworks/websockets/usecases/chat-apps' },
        { name: 'Live Notifications & Updates', path: '/frameworks/websockets/usecases/notifications' },
        { name: 'Collaborative Editing (Google Docs Style)', path: '/frameworks/websockets/usecases/collaboration' },
        { name: 'Stock Market & Live Data Feeds', path: '/frameworks/websockets/usecases/live-data' },
      ],
    },
    // ---------- WebSockets Use Cases Navigation End ----------

    // ---------- WebSockets Security & Optimization Navigation Start ----------
    {
      name: 'WebSockets Security & Optimization',
      subpages: [
        { name: 'WebSockets Security Best Practices', path: '/frameworks/websockets/security/best-practices' },
        { name: 'Handling Authentication in WebSockets', path: '/frameworks/websockets/security/authentication' },
        { name: 'Scaling WebSockets with Load Balancers', path: '/frameworks/websockets/security/scaling' },
        { name: 'Handling Connection Errors & Reconnects', path: '/frameworks/websockets/security/error-handling' },
      ],
    },
    // ---------- WebSockets Security & Optimization Navigation End ----------
  ],
};

export default WebSocketsNavigation;
