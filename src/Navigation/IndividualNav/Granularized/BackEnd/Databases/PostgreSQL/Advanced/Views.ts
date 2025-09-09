import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Views: Subpage = {
  name: 'Views & Materialized Views',
  subpages: [
    {
      name: 'Understanding Views',
      path: '/postgresql/advanced/views/overview',
    },
    {
      name: 'Creating & Using Views',
      path: '/postgresql/advanced/views/creating-using',
    },
    {
      name: 'Materialized Views & Performance',
      path: '/postgresql/advanced/views/materialized-views',
    },
    {
      name: 'Refreshing & Indexing Views',
      path: '/postgresql/advanced/views/refreshing-indexing',
    },
  ],
};

export default Views;