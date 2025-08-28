import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const CRUD: Subpage = {
  name: 'CRUD Operations',
  subpages: [
    {
      name: 'Create',
      path: '/databases/mongodb/crud/create',
    },
    {
      name: 'Read',
      path: '/databases/mongodb/crud/read',
    },
    {
      name: 'Update',
      path: '/databases/mongodb/crud/update',
    },
    {
      name: 'Delete',
      path: '/databases/mongodb/crud/delete',
    },
    {
      name: 'Bulk Operations',
      path: '/databases/mongodb/crud/bulk-operations',
    },
  ],
};

export default CRUD;