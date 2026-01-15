import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/testing/framework/jest/basics/fundamentals/intro"
        },
        {
          name: "Install & Setup",
          path: "/testing/framework/jest/basics/fundamentals/install-setup"
        },
        {
          name: "First Test",
          path: "/testing/framework/jest/basics/fundamentals/first-test"
        },
        {
          name: "Running Tests",
          path: "/testing/framework/jest/basics/fundamentals/running-tests"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Matchers & Assertions",
          path: "/testing/framework/jest/basics/authoring/matchers-assertions"
        },
        {
          name: "Async Testing",
          path: "/testing/framework/jest/basics/authoring/async-testing"
        }
      ]
    },
    {
      name: "Mocking",
      subpages: [
        {
          name: "Functions & Modules",
          path: "/testing/framework/jest/basics/mocking/functions-modules"
        },
        {
          name: "Timers & Time",
          path: "/testing/framework/jest/basics/mocking/timers-time"
        }
      ]
    },
    {
      name: "TypeScript",
      subpages: [
        {
          name: "ts-jest / babel-jest",
          path: "/testing/framework/jest/basics/typescript/ts-or-babel-jest"
        },
        {
          name: "Types & Config",
          path: "/testing/framework/jest/basics/typescript/types-config"
        }
      ]
    }
  ]
};

export default Basics;