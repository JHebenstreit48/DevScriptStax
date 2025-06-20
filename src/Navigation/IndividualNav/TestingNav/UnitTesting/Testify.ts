import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TestifyNav: Subpage = {
  name: 'Testify',
  subpages: [
    // ---------- Testify Fundamentals Navigation Start ----------
    {
      name: 'Testify Fundamentals',
      subpages: [
        {
          name: 'Introduction to Testify',
          path: '/testing/unit/testify/intro'
        },
        {
          name: 'Installing Testify',
          path: '/testing/unit/testify/install'
        },
        {
          name: 'Writing Your First Testify Test',
          path: '/testing/unit/testify/first-test'
        },
        {
          name: 'Running Testify Tests',
          path: '/testing/unit/testify/running-tests'
        }
      ]
    },
    // ---------- Testify Fundamentals Navigation End ----------

    // ---------- Writing Testify Tests Navigation Start ----------
    {
      name: 'Writing Testify Tests',
      subpages: [
        {
          name: 'Assertions & Expectations',
          path: '/testing/unit/testify/assertions'
        },
        {
          name: 'Using Fixtures in Testify',
          path: '/testing/unit/testify/fixtures'
        },
        {
          name: 'Mocking & Stubbing in Testify',
          path: '/testing/unit/testify/mocking'
        },
        {
          name: 'Handling Exceptions',
          path: '/testing/unit/testify/exceptions'
        },
        {
          name: 'Best Practices for Testify',
          path: '/testing/unit/testify/best-practices'
        }
      ]
    },
    // ---------- Writing Testify Tests Navigation End ----------

    // ---------- Advanced Testify Topics Navigation Start ----------
    {
      name: 'Advanced Testify Topics',
      subpages: [
        {
          name: 'Using Testify with Flask',
          path: '/testing/unit/testify/flask'
        },
        {
          name: 'Integrating Testify with CI/CD',
          path: '/testing/unit/testify/ci-integration'
        },
        {
          name: 'Code Coverage with Testify',
          path: '/testing/unit/testify/code-coverage'
        },
        {
          name: 'Debugging Testify Tests',
          path: '/testing/unit/testify/debugging'
        }
      ]
    }
    // ---------- Advanced Testify Topics Navigation End ----------
  ]
};

export default TestifyNav;