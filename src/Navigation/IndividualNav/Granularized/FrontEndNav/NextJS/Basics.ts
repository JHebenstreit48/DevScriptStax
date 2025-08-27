import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const NextJSBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Getting Started',
          path: '/nextjs/basics/fundamentals/getting-started'
        },
        {
          name: 'Project Structure',
          path: '/nextjs/basics/fundamentals/project-structure'
        },
        {
          name: 'Routing',
          path: '/nextjs/basics/fundamentals/routing'
        },
        {
          name: 'API Routes',
          path: '/nextjs/basics/fundamentals/api-routes'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Static Generation (SSG)',
          path: '/nextjs/core-concepts/static-generation'
        },
        {
          name: 'Server-Side Rendering (SSR)',
          path: '/nextjs/core-concepts/server-side-rendering'
        },
        {
          name: 'Client-Side Rendering (CSR)',
          path: '/nextjs/core-concepts/client-side-rendering'
        },
        {
          name: 'Middleware',
          path: '/nextjs/core-concepts/middleware'
        }
      ]
    }
  ]
};

export default NextJSBasics;