import type { Subpage } from '@/types/navigation';

const Core: Subpage = {
  name: 'Core SQL',
  subpages: [
    {
      name: 'Schemas & Tables',
      path: '/postgresql/basics/core-sql/schemas-tables',
    },
    {
      name: 'CRUD (SQL Statements)',
      path: '/postgresql/basics/core-sql/crud',
    },
    {
      name: 'Query',
      path: '/postgresql/basics/coresql/query',
    },
  ],
};

export default Core;