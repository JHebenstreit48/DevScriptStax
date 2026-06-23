import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/testing/unit/rspec/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/testing/unit/rspec/basics/fundamentals/install-setup"
        },
        {
          name: "First Test",
          path: "/testing/unit/rspec/basics/fundamentals/first-test"
        },
        {
          name: "Running Tests",
          path: "/testing/unit/rspec/basics/fundamentals/running-tests"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "describe & context",
          path: "/testing/unit/rspec/basics/authoring/describe-context"
        },
        {
          name: "let & subject",
          path: "/testing/unit/rspec/basics/authoring/let-subject"
        },
        {
          name: "before & after Hooks",
          path: "/testing/unit/rspec/basics/authoring/before-after-hooks"
        }
      ]
    },
    {
      name: "Matchers",
      subpages: [
        {
          name: "Built-in Matchers",
          path: "/testing/unit/rspec/basics/matchers/built-in"
        },
        {
          name: "Custom Matchers",
          path: "/testing/unit/rspec/basics/matchers/custom"
        }
      ]
    },
    {
      name: "Doubles",
      subpages: [
        {
          name: "Mocks & Stubs",
          path: "/testing/unit/rspec/basics/doubles/mocks-stubs"
        },
        {
          name: "Message Expectations",
          path: "/testing/unit/rspec/basics/doubles/message-expectations"
        }
      ]
    }
  ]
};

export default Basics;