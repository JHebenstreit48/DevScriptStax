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
          name: 'Setup & TSConfig',
          path: '/typescript/basics/fundamentals/setup-and-tsconfig'
        }
      ]
    },
    {
      name: 'Types',
      subpages: [
        {
          name: 'Primitive & Complex Types',
          path: '/typescript/basics/types/primitive-complex'
        },
        {
          name: 'Enums & Type Inference',
          path: '/typescript/basics/types/enums-inference'
        }
      ]
    }
  ]
};

export default TSBasics;
