import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const CRUD: Subpage = {
  name: 'CRUD Operations',
  subpages: [
    {
      name: 'Create',
      path: '/databases/mongodb/basics/crud/create',
    },
    {
      name: 'Read',
      path: '/databases/mongodb/basics/crud/read',
    },
    {
      name: 'Update',
      path: '/databases/mongodb/basics/crud/update',
    },
    {
      name: 'Delete',
      path: '/databases/mongodb/basics/crud/delete',
    },
    {
      name: 'Bulk Operations',
      path: '/databases/mongodb/basics/crud/bulk-operations',
    },
  ],
};

export default CRUD;