import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const HTMLAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Topics',
      subpages: [
        {
          name: 'HTML5 Features',
          path: '/html/advanced/html5'
        },
        {
          name: 'Web Accessibility',
          path: '/html/advanced/accessibility'
        },
        {
          name: 'SEO Best Practices',
          path: '/html/advanced/seo'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Code Standards',
          path: '/html/best-practices/standards'
        },
        {
          name: 'Performance Optimization',
          path: '/html/best-practices/performance'
        }
      ]
    }
  ]
};

export default HTMLAdvanced;
