import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Mongoose: Subpage = {
  name: 'Mongoose',
  subpages: [
    {
        name: 'Overview',
        path: '/databases/mongodb/basics/mongoose/overview'
    },
    {
        name: 'Schemas & Models',
        path: '/databases/mongodb/basics/mongoose/schemas-and-models'
    },
    {
        name: 'Queries & Filters',
        path: '/databases/mongodb/basics/mongoose/queries'
    },
    {
        name: 'Updates & Write Ops',
        path: '/databases/mongodb/basics/mongoose/updates'
    },
    {
        name: 'Validation & Middleware',
        path: '/databases/mongodb/basics/mongoose/validation-middleware'
    },
    {
        name: 'Populate & Relationships',
        path: '/databases/mongodb/basics/mongoose/populate'
    },
    // Optional basics that scale well later:
    // { name: 'Lean Docs, Virtuals & Timestamps', path: '/databases/mongodb/basics/mongoose/lean-virtuals-timestamps' },
    // { name: 'Plugins & Patterns', path: '/databases/mongodb/basics/mongoose/plugins' },
  ],
};

export default Mongoose;
