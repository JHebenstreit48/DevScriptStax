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
          path: '/react/basics/fundamentals/structure'
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
          name: 'Event Handling',
          path: '/react/basics/core/eventhandling'
        },
        {
          name: 'Forms & Inputs',
          path: '/react/basics/core/forms'
        }
      ]
    }
  ]
};

export default ReactBasicsNavigation;