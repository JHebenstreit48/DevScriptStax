import type { Subpage } from '@/types/navigation';

const CRUD: Subpage = {
  name: 'CRUD Operations',
  subpages: [
    {
      name: 'Create',
      path: '/mongodb/basics/crud/create',
    },
    {
      name: 'Read',
      path: '/mongodb/basics/crud/read',
    },
    {
      name: 'Update',
      path: '/mongodb/basics/crud/update',
    },
    {
      name: 'Delete',
      path: '/mongodb/basics/crud/delete',
    },
    {
      name: 'Bulk Operations',
      path: '/mongodb/basics/crud/bulk-operations',
    },
  ],
};

export default CRUD;