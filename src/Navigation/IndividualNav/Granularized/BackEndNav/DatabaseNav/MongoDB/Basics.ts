import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const MongoDBBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/databases/mongodb/intro/Introduction'
        },
        {
          name: 'NoSQL vs SQL',
          path: '/databases/mongodb/intro/nosql-vs-sql'
        },
        {
          name: 'Setup',
          path: '/databases/mongodb/intro/setup'
        },
        {
          name: 'Use Cases',
          path: '/databases/mongodb/intro/use-cases'
        }
      ]
    },
    {
      name: 'CRUD Operations',
      subpages: [
        {
          name: 'Create',
          path: '/databases/mongodb/crud/create'
        },
        {
          name: 'Read',
          path: '/databases/mongodb/crud/read'
        },
        {
          name: 'Update',
          path: '/databases/mongodb/crud/update'
        },
        {
          name: 'Delete',
          path: '/databases/mongodb/crud/delete'
        },
        {
          name: 'Bulk Operations',
          path: '/databases/mongodb/crud/bulk-operations'
        }
      ]
    }
  ]
};

export default MongoDBBasics;