import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const IndexesAndPerformance: Subpage = {
  name: 'Indexes & Performance',
  subpages: [
    {
      name: 'Index Types (B-tree, Hash, GIN, GIST)',
      path: '/postgresql/intermediate/indexes-perf/index-types',
    },
    {
      name: 'Query Plans & EXPLAIN',
      path: '/postgresql/intermediate/indexes-perf/explain',
    },
  ],
};

export default IndexesAndPerformance;