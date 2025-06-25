import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const NextJSBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Getting Started',
          path: '/nextjs/basics/getting-started'
        },
        {
          name: 'Project Structure',
          path: '/nextjs/basics/project-structure'
        },
        {
          name: 'Routing',
          path: '/nextjs/basics/routing'
        },
        {
          name: 'API Routes',
          path: '/nextjs/basics/api-routes'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Static Generation (SSG)',
          path: '/nextjs/core-concepts/ssg'
        },
        {
          name: 'Server-Side Rendering (SSR)',
          path: '/nextjs/core-concepts/ssr'
        },
        {
          name: 'Client-Side Rendering (CSR)',
          path: '/nextjs/core-concepts/csr'
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