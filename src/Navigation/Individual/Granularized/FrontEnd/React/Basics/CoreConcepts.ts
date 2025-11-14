import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const CoreConcepts: Subpage = {
  name: 'Core Concepts',
  subpages: [
    {
      name: 'JSX',
      path: '/react/basics/core/jsx'
    },
    {
      name: 'Event Handling',
      path: '/react/basics/core/event-handling'
    },
    {
      name: 'Props/State',
      subpages: [
        {
          name: 'Props',
          path: '/react/basics/core/props-and-state/props'
        },
        {
          name: 'State',
          path: '/react/basics/core/props-and-state/state'
        }
      ]
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

export default CoreConcepts;