import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const HTMLAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Topics',
      subpages: [
        {
          name: 'HTML5 Features',
          path: '/html/advanced/topics/html5features'
        },
        {
          name: 'Web Accessibility',
          path: '/html/advanced/topics/accessibility'
        },
        {
          name: 'SEO Best Practices',
          path: '/html/advanced/topics/seo'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        {
          name: 'Code Standards',
          path: '/html/advanced/bestpractices/standards'
        },
        {
          name: 'Performance Optimization',
          path: '/html/advanced/bestpractices/performance'
        }
      ]
    }
  ]
};

export default HTMLAdvanced;
