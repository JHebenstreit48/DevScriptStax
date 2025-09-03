import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Views: Subpage = {
  name: 'Views & Materialized Views',
  subpages: [
    {
      name: 'Understanding Views',
      path: '/databases/postgresql/advanced/views/overview',
    },
    {
      name: 'Creating & Using Views',
      path: '/databases/postgresql/advanced/views/creating-using',
    },
    {
      name: 'Materialized Views & Performance',
      path: '/databases/postgresql/advanced/views/materialized-views',
    },
    {
      name: 'Refreshing & Indexing Views',
      path: '/databases/postgresql/advanced/views/refreshing-indexing',
    },
  ],
};

export default Views;