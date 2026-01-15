import type { Subpage } from '@/types/navigation';

const ExtensionsAndFDW: Subpage = {
  name: 'Extensions & FDW',
  subpages: [
    {
      name: 'Popular Extensions',
      path: '/postgresql/advanced/extensions/overview',
    },
    {
      name: 'PostGIS (Geospatial)',
      path: '/postgresql/advanced/extensions/postgis',
    },
    {
      name: 'pg_stat_statements',
      path: '/postgresql/advanced/extensions/pg-stat-statements',
    },
    {
      name: 'Foreign Data Wrappers (FDW)',
      path: '/postgresql/advanced/extensions/fdw',
    },
  ],
};

export default ExtensionsAndFDW;