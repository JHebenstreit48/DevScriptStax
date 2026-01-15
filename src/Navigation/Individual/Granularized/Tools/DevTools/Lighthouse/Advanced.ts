import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = 
{
  name: 'Advanced',
  subpages: 
  [
    {
      name: 'Automation & CI',
      subpages: 
      [
        {
          name: 'CLI & JSON Exports',
          path: '/lighthouse/cli-and-json'
        },
        {
          name: 'CI/CD Integration (Netlify / GitHub Actions)',
          path: '/lighthouse/ci-integration'
        }
      ]
    },
    {
      name: 'Performance Engineering',
      subpages: 
      [
        {
          name: 'Core Web Vitals (LCP / CLS / INP) Deep Dive',
          path: '/lighthouse/core-web-vitals'
        },
        {
          name: 'Budgets & Thresholds',
          path: '/lighthouse/budgets-and-thresholds'
        }
      ]
    }
  ]
};

export default Advanced;