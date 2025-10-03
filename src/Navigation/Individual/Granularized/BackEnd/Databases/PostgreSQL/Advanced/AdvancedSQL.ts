import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const AdvancedSQL: Subpage = {
  name: 'Advanced SQL',
  subpages: [
    {
      name: 'Common Table Expressions (CTEs)',
      path: '/postgresql/advanced/sql/ctes',
    },
    {
      name: 'Window Functions',
      path: '/postgresql/advanced/sql/window-functions',
    },
    {
      name: 'Recursive Queries',
      path: '/postgresql/advanced/sql/recursive-queries',
    },
    {
      name: 'Full-Text Search',
      path: '/postgresql/advanced/sql/full-text-search',
    },
  ],
};

export default AdvancedSQL;