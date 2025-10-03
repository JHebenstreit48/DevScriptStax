import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Mongoose: Subpage = {
  name: 'Mongoose',
  subpages: [
    {
        name: 'Overview',
        path: '/mongodb/basics/mongoose/overview'
    },
    {
        name: 'Schemas & Models',
        path: '/mongodb/basics/mongoose/schemas-and-models'
    },
    {
        name: 'Queries & Filters',
        path: '/mongodb/basics/mongoose/queries'
    },
    {
        name: 'Updates & Write Ops',
        path: '/mongodb/basics/mongoose/updates'
    },
    {
        name: 'Validation & Middleware',
        path: '/mongodb/basics/mongoose/validation-middleware'
    },
    {
        name: 'Populate & Relationships',
        path: '/mongodb/basics/mongoose/populate'
    },
    // Optional basics that scale well later:
    // { name: 'Lean Docs, Virtuals & Timestamps', path: '/mongodb/basics/mongoose/lean-virtuals-timestamps' },
    // { name: 'Plugins & Patterns', path: '/mongodb/basics/mongoose/plugins' },
  ],
};

export default Mongoose;