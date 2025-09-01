import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AggregationAndSearch: Subpage = {
  name: 'Aggregation & Search',
  subpages: [
    {
      name: 'Window & Graph Ops',
      path: '/databases/mongodb/advanced/aggregation/window-graph',
    },
    {
      name: 'Atlas Search Integration',
      path: '/databases/mongodb/advanced/aggregation/atlas-search',
    },
    // Optional later:
        // {
        //   name: 'Vector & Hybrid Search',
        //   path: '/databases/mongodb/advanced/aggregation/vector-hybrid',
    // },
  ],
};

export default AggregationAndSearch;