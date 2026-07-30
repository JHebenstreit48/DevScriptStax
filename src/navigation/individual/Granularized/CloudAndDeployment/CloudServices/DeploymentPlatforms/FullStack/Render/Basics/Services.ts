import type { Subpage } from '@/types/navigation';

const Services: Subpage = {
  name: 'Services',
  subpages: [
    {
      name: 'Static Sites & Web Services',
      path: '/render/basics/services/static-sites-and-web-services',
    },
    {
      name: 'Workers & Cron Jobs',
      path: '/render/basics/services/workers-and-cron-jobs',
    },
  ],
};

export default Services;