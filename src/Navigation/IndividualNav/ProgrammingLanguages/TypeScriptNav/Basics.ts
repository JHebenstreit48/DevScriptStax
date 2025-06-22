import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TSBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/typescript/basics/fundamentals/introduction'
        },
        {
          name: 'Setup',
          path: '/typescript/basics/fundamentals/setup'
        },
        {
          name: 'TSConfig',
          path: '/typescript/basics/fundamentals/tsconfig'
        }
      ]
    },
    {
      name: 'Types',
      subpages: [
        {
          name: 'Core Types',
          path: '/typescript/basics/types/core'
        },
        {
          name: 'Interfaces & Declarations',
          path: '/typescript/basics/types/interfaces'
        }
      ]
    }
  ]
};

export default TSBasics;
