import type { Subpage } from '@/types/navigation';

const Basics: Subpage = 
{
  name: 'Basics',
  subpages: 
  [
    {
      name: 'Getting Started',
      subpages: 
      [
        {
          name: 'Overview & Scoring',
          path: '/lighthouse/overview'
        },
        {
          name: 'Running in Chrome',
          path: '/lighthouse/chrome'
        }
      ]
    },
    {
      name: 'Reading Reports',
      subpages: 
      [
        {
          name: 'Reports & Categories',
          path: '/lighthouse/reports-and-categories'
        },
        {
          name: 'Interpreting Tips & Opportunities',
          path: '/lighthouse/tips-and-opportunities'
        }
      ]
    }
  ]
};

export default Basics;