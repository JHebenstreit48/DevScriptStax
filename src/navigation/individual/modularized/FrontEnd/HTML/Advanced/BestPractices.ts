import type { Subpage } from '@/types/navigation';

const BestPractices: Subpage = {
  name: 'Best Practices',
  subpages: [
    {
      name: 'Code Standards',
      path: '/front-end/html/advanced/bestpractices/standards'
    },
    {
      name: 'Performance Optimization',
      path: '/front-end/html/advanced/bestpractices/performance'
    },
    {
      name: 'Semantic Landmarks & Outline',
      path: '/front-end/html/advanced/bestpractices/semantic-landmarks-and-outline'
    },
    {
      name: 'Accessibility Patterns (HTML-first, ARIA-when-needed)',
      path: '/front-end/html/advanced/bestpractices/accessibility-patterns'
    }
  ]
};

export default BestPractices;