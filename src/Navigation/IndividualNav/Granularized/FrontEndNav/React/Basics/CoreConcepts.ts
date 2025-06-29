import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReactCoreConcepts: Subpage = {
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
      name: 'Forms',
      subpages: [
        {
          name: 'Controlled vs Uncontrolled',
          path: '/react/basics/core/forms/controlled'
        },
        {
          name: 'Patterns & Libraries',
          path: '/react/basics/core/forms/libraries'
        }
      ]
    }
  ]
};

export default ReactCoreConcepts;