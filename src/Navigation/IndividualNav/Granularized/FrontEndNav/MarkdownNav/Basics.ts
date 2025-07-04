import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MarkdownBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/markdown/basics/fundamentals/introduction'
        },
        {
          name: 'Syntax',
          path: '/markdown/basics/fundamentals/syntax'
        }
      ]
    },
    {
      name: 'Content Elements',
      subpages: [
        {
          name: 'Formatting',
          path: '/markdown/basics/content/formatting'
        },
        {
          name: 'Tables',
          path: '/markdown/basics/content/tables'
        },
        {
          name: 'Images & Links',
          path: '/markdown/basics/content/imageslinks'
        }
      ]
    }
  ]
};

export default MarkdownBasics;