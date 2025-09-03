import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const JSONAndJSONB: Subpage = {
  name: 'JSON/JSONB',
  subpages: [
    {
      name: 'Intro to JSON & JSONB',
      path: '/databases/postgresql/advanced/json/overview',
    },
    {
      name: 'Storing & Querying',
      path: '/databases/postgresql/advanced/json/storing-querying',
    },
    {
      name: 'Performance Considerations',
      path: '/databases/postgresql/advanced/json/performance',
    },
    {
      name: 'Indexing JSON Fields',
      path: '/databases/postgresql/advanced/json/indexing',
    },
  ],
};

export default JSONAndJSONB;