import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/testing/framework/mocha/basics/fundamentals/intro"
        },
        {
          name: "Install & Setup",
          path: "/testing/framework/mocha/basics/fundamentals/install-setup"
        },
        {
          name: "First Test",
          path: "/testing/framework/mocha/basics/fundamentals/first-test"
        },
        {
          name: "Running Tests",
          path: "/testing/framework/mocha/basics/fundamentals/running-tests"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Suites & Cases",
          path: "/testing/framework/mocha/basics/authoring/suites-cases"
        },
        {
          name: "Hooks",
          path: "/testing/framework/mocha/basics/authoring/hooks"
        },
        {
          name: "Async Patterns",
          path: "/testing/framework/mocha/basics/authoring/async-patterns"
        }
      ]
    },
    {
      name: "Assertions & Spies",
      subpages: [
        {
          name: "Chai Assertions",
          path: "/testing/framework/mocha/basics/assertions-spies/chai-assertions"
        },
        {
          name: "Sinon Spies/Mocks",
          path: "/testing/framework/mocha/basics/assertions-spies/sinon"
        }
      ]
    },
    {
      name: "TypeScript Integration",
      subpages: [
        {
          name: "Setup",
          path: "/testing/framework/mocha/basics/typescript/setup"
        },
        {
          name: "ts-node & Config",
          path: "/testing/framework/mocha/basics/typescript/ts-node-config"
        }
      ]
    }
  ]
};

export default Basics;