import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const ReactTools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'Icons & Assets',
      subpages: [
        {
          name: 'React Icons',
          path: '/react/tools/icons/react-icons'
        },
        {
          name: 'Font Awesome',
          path: '/react/tools/icons/font-awesome'
        },
        {
          name: 'Heroicons & Others',
          path: '/react/tools/icons/other-icons'
        }
      ]
    },
    {
      name: 'Utilities',
      subpages: [
        {
          name: 'Classnames Library',
          path: '/react/tools/utilities/classnames'
        },
        {
          name: 'UUID & nanoid',
          path: '/react/tools/utilities/ids'
        }
        // {
        //   name: 'Lodash (light usage)',
        //   path: '/react/tools/utilities/lodash'
        // } // Optional — include only if demonstrating debounce, cloneDeep, etc.
      ]
    },
    {
      name: 'Styling Helpers',
      subpages: [
        {
          name: 'Styled Components',
          path: '/react/tools/styling/styled-components'
        }
        // {
        //   name: 'Tailwind + React',
        //   path: '/react/tools/styling/tailwind'
        // } // Commented out — consider moving to CSS nav category instead
      ]
    }
  ]
};

export default ReactTools;