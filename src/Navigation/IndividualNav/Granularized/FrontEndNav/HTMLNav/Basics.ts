import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const HTMLBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/html/basics/fundamentals/introduction'
        },
        {
          name: 'History',
          path: '/html/basics/fundamentals/history'
        }
      ]
    },
    {
      name: 'Structure',
      subpages: [
        {
          name: 'Elements / Tags',
          path: '/html/basics/structure/elements'
        },
        {
          name: 'Attributes',
          path: '/html/basics/structure/attributes'
        }
      ]
    },
    {
      name: 'Forms / Semantics',
      subpages: [
        {
          name: 'Forms',
          path: '/html/basics/formssemantics/forms'
        },
        {
          name: 'Semantic Elements',
          path: '/html/basics/formssemantics/semantic'
        }
      ]
    }
  ]
};

export default HTMLBasics;