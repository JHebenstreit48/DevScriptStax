import type { Subpage } from '@/types/navigation';

const TimeSeriesAndSpecialized: Subpage = {
  name: 'Time-Series & Specialized',
  subpages: [
    {
      name: 'Time-Series Collections',
      path: '/mongodb/advanced/specialized/time-series',
    },
    {
      name: 'Capped Collections & Tailable Cursors',
      path: '/mongodb/advanced/specialized/capped-tailable',
    },
    // If/when you want it:
    // {
    //   name: 'Geospatial Data & Queries',
    //   path: '/mongodb/advanced/specialized/geospatial',
    // },
  ],
};

export default TimeSeriesAndSpecialized;