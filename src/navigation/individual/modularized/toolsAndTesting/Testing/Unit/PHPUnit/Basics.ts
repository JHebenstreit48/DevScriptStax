import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/testing/unit/phpunit/basics/fundamentals/intro"
        },
        {
          name: "Install & Setup",
          path: "/testing/unit/phpunit/basics/fundamentals/install-setup"
        },
        {
          name: "First Test",
          path: "/testing/unit/phpunit/basics/fundamentals/first-test"
        },
        {
          name: "Running Tests",
          path: "/testing/unit/phpunit/basics/fundamentals/running-tests"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Assertions & Expectations",
          path: "/testing/unit/phpunit/basics/authoring/assertions-expectations"
        },
        {
          name: "Data Providers",
          path: "/testing/unit/phpunit/basics/authoring/data-providers"
        }
      ]
    },
    {
      name: "Doubles",
      subpages: [
        {
          name: "Mocks & Stubs",
          path: "/testing/unit/phpunit/basics/doubles/mocks-stubs"
        },
        {
          name: "Prophecy",
          path: "/testing/unit/phpunit/basics/doubles/prophecy"
        }
      ]
    },
    {
      name: "Edge Cases",
      subpages: [
        {
          name: "Exceptions",
          path: "/testing/unit/phpunit/basics/edge-cases/exceptions"
        },
        {
          name: "Private/Protected",
          path: "/testing/unit/phpunit/basics/edge-cases/private-protected"
        }
      ]
    }
  ]
};

export default Basics;