import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const IndexingAndQuery: Subpage = {
  name: 'Indexing & Query Planner',
  subpages: [
    {
      name: 'Partial/Wildcard/Columnstore',
      path: '/mongodb/advanced/indexing/special',
    },
    {
      name: 'Explain() Deep Dive',
      path: '/mongodb/advanced/indexing/explain',
    },
  ],
};

export default IndexingAndQuery;