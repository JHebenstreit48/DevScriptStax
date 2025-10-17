import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Advanced: Subpage = 
{
  name: 'Advanced',
  subpages: 
  [
    {
      name: 'Topics',
      subpages: 
      [
        {
          name: 'HTML5 Features',
          path: '/html/advanced/topics/html5-features'
        },
        {
          name: 'Web Accessibility',
          path: '/html/advanced/topics/accessibility'
        },
        {
          name: 'SEO Best Practices',
          path: '/html/advanced/topics/seo-best-practices'
        },
        {
          name: 'HTML Templates & Slots',
          path: '/html/advanced/topics/templates-and-slots'
        },
        {
          name: 'Resource Hints & Preloading',
          path: '/html/advanced/topics/resource-hints-and-preloading'
        },
        {
          name: 'Security & Linking (rel / sandbox / referrerpolicy)',
          path: '/html/advanced/topics/security-and-linking'
        },
        {
          name: 'Social Metadata (OpenGraph / Twitter)',
          path: '/html/advanced/topics/social-metadata'
        }
      ]
    },
    {
      name: 'Best Practices',
      subpages: 
      [
        {
          name: 'Code Standards',
          path: '/html/advanced/bestpractices/standards'
        },
        {
          name: 'Performance Optimization',
          path: '/html/advanced/bestpractices/performance'
        },
        {
          name: 'Semantic Landmarks & Outline',
          path: '/html/advanced/bestpractices/semantic-landmarks-and-outline'
        },
        {
          name: 'Accessibility Patterns (HTML-first, ARIA-when-needed)',
          path: '/html/advanced/bestpractices/accessibility-patterns'
        }
      ]
    }
  ]
};

export default Advanced;