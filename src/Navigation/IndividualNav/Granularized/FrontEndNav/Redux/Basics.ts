import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReduxBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Overview',
          path: '/redux/basics/overview'
        },
        {
          name: 'Core Concepts',
          path: '/redux/basics/coreconcepts'
        },
        {
          name: 'Setup',
          path: '/redux/basics/setup'
        }
      ]
    }
  ]
};

export default ReduxBasics;