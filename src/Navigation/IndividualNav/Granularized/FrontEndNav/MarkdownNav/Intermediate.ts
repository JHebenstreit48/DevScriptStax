import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MarkdownIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Extended Syntax',
      subpages: [
        {
          name: 'Extensions (CommonMark, GFM)',
          path: '/markdown/intermediate/syntax/extensions'
        },
        {
          name: 'Code Blocks & Highlighting',
          path: '/markdown/intermediate/syntax/codeblocks'
        }
      ]
    },
    {
      name: 'Interactive Features',
      subpages: [
        {
          name: 'Task Lists',
          path: '/markdown/intermediate/interactive/tasklists'
        },
        {
          name: 'Footnotes',
          path: '/markdown/intermediate/interactive/footnotes'
        }
      ]
    }
  ]
};

export default MarkdownIntermediate;