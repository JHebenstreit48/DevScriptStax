import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const JSBestPractices: Subpage = {
  name: 'Best Practices',
  subpages: [
    {
      name: 'Code Quality',
      subpages: [
        {
          name: 'Coding Standards',
          path: '/javascript/best-practices/codequality/standards'
        },
        {
          name: 'Debugging Techniques',
          path: '/javascript/best-practices/codequality/debugging'
        }
      ]
    },
    {
      name: 'Security Best Practices',
      subpages: [
        {
          name: 'Common Vulnerabilities',
          path: '/javascript/best-practices/security/vulnerabilities'
        },
        {
          name: 'Protecting Against XSS and CSRF',
          path: '/javascript/best-practices/security/xsscsrf'
        }
      ]
    },
    {
      name: 'Writing Scalable Code',
      subpages: [
        {
          name: 'Scalability Principles',
          path: '/javascript/best-practices/scalability/principles'
        }
      ]
    }
  ]
};

export default JSBestPractices;
