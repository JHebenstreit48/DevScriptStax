import type { Subpage } from '@/types/navigation';

const JSONAndJSONB: Subpage = {
  name: 'JSON/JSONB',
  subpages: [
    {
      name: 'Intro to JSON & JSONB',
      path: '/postgresql/advanced/json/overview',
    },
    {
      name: 'Storing & Querying',
      path: '/postgresql/advanced/json/storing-querying',
    },
    {
      name: 'Performance Considerations',
      path: '/postgresql/advanced/json/performance',
    },
    {
      name: 'Indexing JSON Fields',
      path: '/postgresql/advanced/json/indexing',
    },
  ],
};

export default JSONAndJSONB;