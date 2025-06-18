import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReactBasicsNavigation: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/react/basics/fundamentals/introduction'
        }, // What is React? Why use it?
        {
          name: 'Setup & Installation',
          path: '/react/basics/fundamentals/setup'
        }, // Node.js, CRA, Vite
        {
          name: 'Project Structure',
          path: '/react/basics/fundamentals/projectstructure'
        } // Files & folders
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'JSX/Rendering',
          path: '/react/basics/core/jsx'
        },
        {
          name: 'Props/State',
          subpages: [
            {
              name: 'Props',
              path: '/react/basics/core/propsstate/props'
            },
            {
              name: 'State',
              path: '/react/basics/core/propsstate/state'
            }
          ]
        },
        {
          name: 'Components',
          subpages: [
            {
              name: 'Behavior',
              subpages: [
                { name: 'Lifecycle Methods', path: '/react/basics/core/components/behavior/lifecyclemethods' },
                { name: 'Hooks Overview', path: '/react/basics/core/components/behavior/hooks-overview' },
                { name: 'Custom Hooks', path: '/react/basics/core/components/behavior/hooks-custom' }
              ]
            }
          ]
        },
        {
          name: 'Event Handling',
          path: '/react/basics/core/event-handling'
        }
      ]
    },
    {
      name: 'Data',
      subpages: [
        {
          name: 'Fetching Data',
          path: '/react/basics/data/fetching-data'
        },
        {
          name: 'Forms & Inputs',
          path: '/react/basics/data/forms'
        },
        {
          name: 'Context API',
          path: '/react/basics/data/context-api'
        }
      ]
    },
  ]
};

export default ReactBasicsNavigation;