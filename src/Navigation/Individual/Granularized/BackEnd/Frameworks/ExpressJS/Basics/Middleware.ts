import type { Subpage } from '@/types/navigation';

const Middleware: Subpage = {
    name: 'Middleware',
    subpages: [
        {
          name: "Core Middleware",
          path: '/frameworks/express/basics/middleware/core'
        },
        {
          name: "Custom Middleware",
          path: '/frameworks/express/basics/middleware/custom'
        }
    ]
};

export default Middleware;