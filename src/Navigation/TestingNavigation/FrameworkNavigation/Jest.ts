import { Subpage } from "@/Navigation/NavigationTypes";

const JestNavigation: Subpage = {
  name: "Jest Testing",
  subpages: [
    // ---------- Jest Fundamentals Navigation Start ----------
    {
      name: "Jest Fundamentals",
      subpages: [
        { name: "Introduction to Jest", path: "/testing/framework/jest/intro" },
        { name: "Setting Up Jest", path: "/testing/framework/jest/setup" },
        { name: "Writing Your First Jest Test", path: "/testing/framework/jest/first-test" },
        { name: "Running Jest Tests", path: "/testing/framework/jest/running-tests" },
      ],
    },
    // ---------- Jest Fundamentals Navigation End ----------

    // ---------- Writing Jest Tests Navigation Start ----------
    {
      name: "Writing Jest Tests",
      subpages: [
        { name: "Matchers & Assertions", path: "/testing/framework/jest/matchers" },
        { name: "Mocking Functions & Modules", path: "/testing/framework/jest/mocking" },
        { name: "Testing Async Code", path: "/testing/framework/jest/async-testing" },
        { name: "Using Jest with TypeScript", path: "/testing/framework/jest/typescript" },
      ],
    },
    // ---------- Writing Jest Tests Navigation End ----------

    // ---------- Advanced Jest Topics Navigation Start ----------
    {
      name: "Advanced Jest Topics",
      subpages: [
        { name: "Jest with React & Next.js", path: "/testing/framework/jest/react-nextjs" },
        { name: "Snapshot Testing", path: "/testing/framework/jest/snapshot-testing" },
        { name: "Code Coverage in Jest", path: "/testing/framework/jest/code-coverage" },
        { name: "Performance Optimization", path: "/testing/framework/jest/performance" },
        { name: "Jest & Continuous Integration", path: "/testing/framework/jest/ci-integration" },
        { name: "Debugging Jest Tests", path: "/testing/framework/jest/debugging" },
        { name: "Best Practices in Jest", path: "/testing/framework/jest/best-practices" },
      ],
    },
    // ---------- Advanced Jest Topics Navigation End ----------
  ],
};

export default JestNavigation;
