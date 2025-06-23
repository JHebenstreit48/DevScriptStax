import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TSBestPractices: Subpage = {
  name: 'Best Practices',
  subpages: [
    {
      name: 'Tooling/Config',
      subpages: [
        {
          name: 'Linting/Strict',
          path: '/typescript/best-practices/tooling/lintingstrict'
        },
        {
          name: 'Organization',
          path: '/typescript/best-practices/tooling/organization'
        }
      ]
    },
    {
      name: 'Patterns/Style',
      subpages: [
        {
          name: 'Naming, Modularity, Conventions',
          path: '/typescript/best-practices/patterns/naming-conventions'
        },
        {
          name: 'Errors',
          path: '/typescript/best-practices/patterns/error-handling'
        }
      ]
    }
  ]
};

export default TSBestPractices;
