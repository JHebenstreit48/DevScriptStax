import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const AggregationAndSearch: Subpage = {
  name: 'Aggregation & Search',
  subpages: [
    {
      name: 'Window & Graph Ops',
      path: '/mongodb/advanced/aggregation/window-graph',
    },
    {
      name: 'Atlas Search Integration',
      path: '/mongodb/advanced/aggregation/atlas-search',
    },
    // Optional later:
        // {
        //   name: 'Vector & Hybrid Search',
        //   path: '/mongodb/advanced/aggregation/vector-hybrid',
    // },
  ],
};

export default AggregationAndSearch;