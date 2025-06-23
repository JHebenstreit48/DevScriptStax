import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MarkdownBestPractices: Subpage = {
  name: 'Best Practices',
  subpages: [
    {
      name: 'Consistency',
      path: '/markdown/bestpractices/consistency'
    }, // Writing consistent Markdown
    {
      name: 'Readability',
      path: '/markdown/bestpractices/readability'
    }, // Enhancing content readability
    {
      name: 'Version Control',
      path: '/markdown/bestpractices/versioncontrol'
    } // Working with Git and Markdown
  ]
};

export default MarkdownBestPractices;
