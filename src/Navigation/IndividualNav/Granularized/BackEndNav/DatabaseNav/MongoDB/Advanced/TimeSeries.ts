import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TimeSeriesAndSpecialized: Subpage = {
  name: 'Time-Series & Specialized',
  subpages: [
    {
      name: 'Time-Series Collections',
      path: '/databases/mongodb/advanced/specialized/time-series',
    },
    {
      name: 'Capped Collections & Tailable Cursors',
      path: '/databases/mongodb/advanced/specialized/capped-tailable',
    },
    // If/when you want it:
    // {
    //   name: 'Geospatial Data & Queries',
    //   path: '/databases/mongodb/advanced/specialized/geospatial',
    // },
  ],
};

export default TimeSeriesAndSpecialized;