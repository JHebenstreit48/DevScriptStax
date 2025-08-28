import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/databases/mongodb/intro/introduction',
    },
    {
      name: 'NoSQL vs SQL',
      path: '/databases/mongodb/intro/nosql-vs-sql',
    },
    {
      name: 'Setup',
      path: '/databases/mongodb/intro/setup',
    },
    {
      name: 'Use Cases',
      path: '/databases/mongodb/intro/use-cases',
    },
  ],
};

export default Fundamentals;