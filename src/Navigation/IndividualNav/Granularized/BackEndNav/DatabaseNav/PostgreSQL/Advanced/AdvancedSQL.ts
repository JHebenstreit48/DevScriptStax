import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AdvancedSQL: Subpage = {
  name: 'Advanced SQL',
  subpages: [
    {
      name: 'Common Table Expressions (CTEs)',
      path: '/databases/postgresql/advanced/sql/ctes',
    },
    {
      name: 'Window Functions',
      path: '/databases/postgresql/advanced/sql/window-functions',
    },
    {
      name: 'Recursive Queries',
      path: '/databases/postgresql/advanced/sql/recursive-queries',
    },
    {
      name: 'Full-Text Search',
      path: '/databases/postgresql/advanced/sql/full-text-search',
    },
  ],
};

export default AdvancedSQL;