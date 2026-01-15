import type { Subpage } from '@/types/navigation';

const PerformanceAndSecurity: Subpage = {
  name: 'Performance & Security',
  subpages: [
    {
      name: 'Optimizing Repositories',
      path: '/git/advanced/performance/optimizing',
    },
    {
      name: 'Security Best Practices',
      path: '/git/advanced/security/best-practices',
    },
  ],
};

export default PerformanceAndSecurity;