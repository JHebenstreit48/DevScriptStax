import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TSBestPractices: Subpage = {
  name: 'Best Practices',
  subpages: [
    {
      name: 'Tooling & Configuration',
      subpages: [
        {
          name: 'Linting, Strict Mode & Pitfalls',
          path: '/typescript/best-practices/tooling/linting-strict'
        },
        {
          name: 'Code Organization & tsconfig.json',
          path: '/typescript/best-practices/tooling/code-org-tsconfig'
        }
      ]
    },
    {
      name: 'Patterns & Style',
      subpages: [
        {
          name: 'Naming, Modularity, Conventions',
          path: '/typescript/best-practices/patterns/naming-conventions'
        },
        {
          name: 'Error Handling Standards',
          path: '/typescript/best-practices/patterns/error-handling'
        }
      ]
    }
  ]
};

export default TSBestPractices;
