import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Core: Subpage = {
  name: 'Core SQL',
  subpages: [
    {
      name: 'Schemas & Tables',
      path: '/databases/postgresql/basics/coresql/schemas-tables',
    },
    {
      name: 'CRUD (SQL Statements)',
      path: '/databases/postgresql/basics/coresql/crud',
    },
    {
      name: 'Query',
      path: '/databases/postgresql/basics/coresql/query',
    },
  ],
};

export default Core;