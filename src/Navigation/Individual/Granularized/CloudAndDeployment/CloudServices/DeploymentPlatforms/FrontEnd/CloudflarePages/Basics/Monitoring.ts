import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Monitoring: Subpage = {
  name: 'Monitoring',
  subpages: [
    {
      name: 'Logs & Analytics',
      path: '/cloudflare-pages/basics/monitoring/logs-analytics',
    },
    {
      name: 'Debugging Deploys',
      path: '/cloudflare-pages/basics/monitoring/debugging-deploys',
    },
  ],
};

export default Monitoring;