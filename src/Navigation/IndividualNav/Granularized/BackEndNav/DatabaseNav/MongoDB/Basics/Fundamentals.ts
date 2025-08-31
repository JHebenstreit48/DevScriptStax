import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/databases/mongodb/basics/fundamentals/introduction',
    },
    {
      name: 'NoSQL vs SQL',
      path: '/databases/mongodb/basics/fundamentals/nosql-vs-sql',
    },
    {
      name: 'Setup',
      path: '/databases/mongodb/basics/fundamentals/setup',
    },
    {
      name: 'Use Cases',
      path: '/databases/mongodb/basics/fundamentals/use-cases',
    },
    {
      name: 'BSON & ObjectId',
      path: '/databases/mongodb/basics/fundamentals/bson-objectid',
    },
    {
      name: 'Data Modeling (Intro)',
      path: '/databases/mongodb/basics/fundamentals/data-modeling-intro',
    },
    {
      name: 'Mongoose (Basics)',
      path: '/databases/mongodb/basics/fundamentals/mongoose-basics',
    },
  ],
};

export default Fundamentals;
