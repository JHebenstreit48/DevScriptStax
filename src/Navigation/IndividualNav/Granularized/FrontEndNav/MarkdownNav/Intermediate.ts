import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MarkdownIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'Extensions',
      path: '/markdown/intermediate/extensions'
    }, // CommonMark, GFM
    {
      name: 'Code Blocks',
      path: '/markdown/intermediate/codeblocks'
    }, // Syntax highlighting
    {
      name: 'Task Lists',
      path: '/markdown/intermediate/tasklists'
    }, // Checkboxes
    {
      name: 'Footnotes',
      path: '/markdown/intermediate/footnotes'
    } // Annotations
  ]
};

export default MarkdownIntermediate;
