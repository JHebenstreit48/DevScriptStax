import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReactFullStack: Subpage = {
  name: 'Full Stack',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/react/fullstack/overview'
        }, // What is full stack?
        {
          name: 'Project Structure',
          path: '/react/fullstack/project-structure'
        },
      ]
    },
    {
      name: 'APIs',
      subpages: [
        {
          name: 'Fetching Data',
          path: '/react/fullstack/fetching-data'
        },
        {
          name: 'Context API',
          path: '/react/fullstack/context-api'
        },
        {
          name: 'Error Handling',
          path: '/react/fullstack/error-handling'
        },
      ]
    },
    {
      name: 'Rendering',
      subpages: [
        {
          name: 'SSR',
          path: '/react/fullstack/ssr'
        },
        {
          name: 'SSG',
          path: '/react/fullstack/ssg'
        },
        {
          name: 'Hybrid Rendering',
          path: '/react/fullstack/hybrid-rendering'
        }
      ]
    },
    {
      name: 'Scalability/Performance',
      subpages: [
        {
          name: 'Large Data Sets',
          path: '/react/fullstack/large-data'
        }, // Virtualization, pagination
        {
          name: 'WebSockets',
          path: '/react/fullstack/websockets'
        }, // Real-time data
        {
          name: 'Lazy Loading',
          path: '/react/fullstack/lazy-loading'
        }
      ]
    },
    {
      name: 'Production',
      subpages: [
        {
          name: 'Logging & Monitoring',
          path: '/react/fullstack/logging-monitoring'
        },
        { name: 'Security Practices',
          path: '/react/fullstack/security'
        },
        {
          name: 'Testing',
          path: '/react/fullstack/testing'
        }
      ]
    }
  ]
};

export default ReactFullStack;