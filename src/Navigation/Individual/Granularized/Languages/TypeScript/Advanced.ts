import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Types & Guards',
      subpages: [
        {
          name: 'Union & Intersection Types',
          path: '/typescript/advanced/types/union-intersection',
        },
        {
          name: 'Guards & Assertions',
          path: '/typescript/advanced/types/guards-assertions',
        },
      ],
    },
    {
      name: 'Generics & Utility Types',
      subpages: [
        {
          name: 'Component & Function Generics',
          path: '/typescript/advanced/generics/component-function',
        },
        {
          name: 'Built-in Utility Types',
          path: '/typescript/advanced/generics/utilities',
        },
      ],
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Tooling/Config',
          subpages: [
            {
              name: 'Linting/Strict',
              path: '/typescript/best-practices/tooling/lintingstrict',
            },
            {
              name: 'Organization',
              path: '/typescript/best-practices/tooling/organization',
            },
          ],
        },
        {
          name: 'Patterns/Style',
          subpages: [
            {
              name: 'Naming, Modularity, Conventions',
              path: '/typescript/best-practices/patterns/naming-conventions',
            },
            {
              name: 'Errors',
              path: '/typescript/best-practices/patterns/error-handling',
            },
          ],
        },
      ],
    },
  ],
};

export default Advanced;