import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TSAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Types & Guards',
      subpages: [
        {
          name: 'Union & Intersection Types',
          path: '/typescript/advanced/types/union-intersection'
        },
        {
          name: 'Guards & Assertions',
          path: '/typescript/advanced/types/guards-assertions'
        }
      ]
    },
    {
      name: 'Generics & Utility Types',
      subpages: [
        {
          name: 'Component & Function Generics',
          path: '/typescript/advanced/generics/component-function'
        },
        {
          name: 'Built-in Utility Types',
          path: '/typescript/advanced/generics/utilities'
        }
      ]
    }
  ]
};

export default TSAdvanced;
