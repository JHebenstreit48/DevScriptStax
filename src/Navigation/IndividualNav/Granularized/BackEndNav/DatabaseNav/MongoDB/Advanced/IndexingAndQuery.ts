import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const IndexingAndQuery: Subpage = {
  name: 'Indexing & Query Planner',
  subpages: [
    {
      name: 'Partial/Wildcard/Columnstore',
      path: '/databases/mongodb/advanced/indexing/special',
    },
    {
      name: 'Explain() Deep Dive',
      path: '/databases/mongodb/advanced/indexing/explain',
    },
  ],
};

export default IndexingAndQuery;