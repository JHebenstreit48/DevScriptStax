import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TSIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Functions & Interfaces',
      subpages: [
        {
          name: 'Typing Functions',
          path: '/typescript/intermediate/functions/typing'
        },
        {
          name: 'Interfaces vs Types',
          path: '/typescript/intermediate/functions/interfaces-types'
        }
      ]
    },
    {
      name: 'Classes & Inheritance',
      subpages: [
        {
          name: 'Class Features & Access Modifiers',
          path: '/typescript/intermediate/classes/features'
        },
        {
          name: 'Inheritance & Extends',
          path: '/typescript/intermediate/classes/inheritance'
        }
      ]
    }
  ]
};

export default TSIntermediate;
