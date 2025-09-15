import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Unit vs Integration",
          path: "/javascript/testing/basics/fundamentals/unit-vs-integration"
        },
        {
          name: "Test Pyramid & Scope",
          path: "/javascript/testing/basics/fundamentals/test-pyramid-and-scope"
        }
      ]
    },
    {
      name: "Doubles & Isolation",
      subpages: [
        {
          name: "Mocking & Stubbing",
          path: "/javascript/testing/basics/doubles-and-isolation/mocking-and-stubbing"
        },
        {
          name: "Fakes & Spies",
          path: "/javascript/testing/basics/doubles-and-isolation/fakes-and-spies"
        }
      ]
    },
    {
      name: "Async & Timers",
      subpages: [
        {
          name: "Async/Await Patterns",
          path: "/javascript/testing/basics/async-and-timers/async-await-patterns"
        },
        {
          name: "Timers & Microtasks",
          path: "/javascript/testing/basics/async-and-timers/timers-and-microtasks"
        }
      ]
    },
    {
      name: "Modules & State",
      subpages: [
        {
          name: "ESM/CommonJS Mocking",
          path: "/javascript/testing/basics/modules-and-state/esm-commonjs-mocking"
        },
        {
          name: "Global State Isolation",
          path: "/javascript/testing/basics/modules-and-state/global-state-isolation"
        }
      ]
    }
  ]
};

export default Basics;