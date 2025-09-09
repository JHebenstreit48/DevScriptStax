import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Monitoring: Subpage = {
  name: 'Monitoring',
  subpages: [
    {
      name: 'Realtime Metrics (mongostat)',
      path: '/mongodb/tools/monitoring/mongostat',
    },
    {
      name: 'Collection Activity (mongotop)',
      path: '/mongodb/tools/monitoring/mongotop',
    },
  ],
};

export default Monitoring;