import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const BestPractices: Subpage = {
  name: 'Practices',
  subpages: [
    {
      name: 'Security',
      path: '/environment/practices/security'
    },
    {
      name: 'Debugging',
      path: '/environment/practices/debugging'
    },
    {
      name: 'Pitfalls',
      path: '/environment/practices/pitfalls'
    }
  ]
};

export default BestPractices;