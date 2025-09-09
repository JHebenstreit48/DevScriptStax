import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Extended Syntax',
      subpages: [
        {
          name: 'Extensions (CommonMark, GFM)',
          path: '/markdown/intermediate/extended-syntax/extensions'
        },
        {
          name: 'Code Blocks & Highlighting',
          path: '/markdown/intermediate/extended-syntax/code-blocks'
        }
      ]
    },
    {
      name: 'Interactive Features',
      subpages: [
        {
          name: 'Task Lists',
          path: '/markdown/intermediate/interactive-features/task-lists'
        },
        {
          name: 'Footnotes',
          path: '/markdown/intermediate/interactive-features/footnotes'
        }
      ]
    }
  ]
};

export default Intermediate;