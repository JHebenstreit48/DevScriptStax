import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/testing/framework/vitest/basics/fundamentals/intro"
        },
        {
          name: "Install & Setup",
          path: "/testing/framework/vitest/basics/fundamentals/install-setup"
        },
        {
          name: "First Test",
          path: "/testing/framework/vitest/basics/fundamentals/first-test"
        },
        {
          name: "Running Tests",
          path: "/testing/framework/vitest/basics/fundamentals/running-tests"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Matchers & Assertions",
          path: "/testing/framework/vitest/basics/authoring/matchers-assertions"
        },
        {
          name: "Async Testing",
          path: "/testing/framework/vitest/basics/authoring/async-testing"
        }
      ]
    },
    {
      name: "Mocking",
      subpages: [
        {
          name: "Modules & Functions",
          path: "/testing/framework/vitest/basics/mocking/modules-functions"
        },
        {
          name: "Timers & Time",
          path: "/testing/framework/vitest/basics/mocking/timers-time"
        }
      ]
    },
    {
      name: "Environments",
      subpages: [
        {
          name: "node & jsdom",
          path: "/testing/framework/vitest/basics/environments/node-jsdom"
        },
        {
          name: "happy-dom & Web APIs",
          path: "/testing/framework/vitest/basics/environments/happy-dom-webapis"
        }
      ]
    },
    {
      name: "TypeScript Integration",
      subpages: [
        {
          name: "Setup",
          path: "/testing/framework/vitest/basics/typescript/setup"
        },
        {
          name: "Path Aliases",
          path: "/testing/framework/vitest/basics/typescript/path-aliases"
        }
      ]
    }
  ]
};

export default Basics;