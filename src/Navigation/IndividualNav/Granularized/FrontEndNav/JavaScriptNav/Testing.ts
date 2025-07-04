import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const JSTesting: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Unit vs Integration",
          path: "/javascript/testing/fundamentals/unitvsintegration",
        },
        {
          name: "Mocking and Stubbing",
          path: "/javascript/testing/fundamentals/mocking",
        },
      ],
    },
    {
      name: "Testing Tools",
      subpages: [
        {
          name: "Jest Basics",
          path: "/javascript/testing/tools/jest",
        },
        {
          name: "DOM Testing with Vitest",
          path: "/javascript/testing/tools/vitest",
        },
      ],
    },
  ],
};

export default JSTesting;