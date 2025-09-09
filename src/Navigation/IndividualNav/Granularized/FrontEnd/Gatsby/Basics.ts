import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GatsbyBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Getting Started',
          path: '/gatsby/basics/gettingstarted'
        },
        {
          name: 'Project Structure',
          path: '/gatsby/basics/projectstructure'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'GraphQL',
          path: '/gatsby/core/graphql'
        },
        {
          name: 'Plugins',
          path: '/gatsby/core/plugins'
        },
        {
          name: 'Layouts / Pages',
          path: '/gatsby/core/layouts'
        },
        {
          name: 'Static Assets',
          path: '/gatsby/core/assets'
        }
      ]
    }
  ]
};

export default GatsbyBasics;