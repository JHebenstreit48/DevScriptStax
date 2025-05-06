import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const MochaNavigation: Subpage = {
  name: "Mocha Testing",
  subpages: [
    // ---------- Mocha Fundamentals Navigation Start ----------
    {
      name: "Mocha Fundamentals",
      subpages: [
        { name: "Introduction to Mocha", path: "/testing/framework/mocha/intro" },
        { name: "Setting Up Mocha", path: "/testing/framework/mocha/setup" },
        { name: "Writing Your First Mocha Test", path: "/testing/framework/mocha/first-test" },
        { name: "Running Mocha Tests", path: "/testing/framework/mocha/running-tests" },
      ],
    },
    // ---------- Mocha Fundamentals Navigation End ----------

    // ---------- Writing Mocha Tests Navigation Start ----------
    {
      name: "Writing Mocha Tests",
      subpages: [
        { name: "Test Suites & Test Cases", path: "/testing/framework/mocha/test-suites" },
        { name: "Assertions with Chai", path: "/testing/framework/mocha/assertions-chai" },
        { name: "Hooks (Before, After, BeforeEach, AfterEach)", path: "/testing/framework/mocha/hooks" },
        { name: "Testing Asynchronous Code", path: "/testing/framework/mocha/async-testing" },
        { name: "Using Mocha with TypeScript", path: "/testing/framework/mocha/typescript" },
      ],
    },
    // ---------- Writing Mocha Tests Navigation End ----------

    // ---------- Advanced Mocha Topics Navigation Start ----------
    {
      name: "Advanced Mocha Topics",
      subpages: [
        { name: "Using Mocha with Node.js", path: "/testing/framework/mocha/nodejs" },
        { name: "Mocha with React & Next.js", path: "/testing/framework/mocha/react-nextjs" },
        { name: "Code Coverage with Mocha & Istanbul", path: "/testing/framework/mocha/code-coverage" },
        { name: "Debugging Mocha Tests", path: "/testing/framework/mocha/debugging" },
        { name: "Performance Optimization", path: "/testing/framework/mocha/performance" },
        { name: "Mocha & Continuous Integration", path: "/testing/framework/mocha/ci-integration" },
        { name: "Best Practices for Mocha", path: "/testing/framework/mocha/best-practices" },
      ],
    },
    // ---------- Advanced Mocha Topics Navigation End ----------
  ],
};

export default MochaNavigation;
