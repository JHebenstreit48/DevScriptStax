import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/pytest/basics/fundamentals/introduction"
        },
        {
          name: "Install & Setup",
          path: "/pytest/basics/fundamentals/install-setup"
        },
        {
          name: "First Test",
          path: "/pytest/basics/fundamentals/first-test"
        },
        {
          name: "Run & CLI",
          path: "/pytest/basics/fundamentals/run-and-cli"
        }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "Assertions",
          path: "/pytest/basics/core-concepts/assertions"
        },
        {
          name: "Fixtures (Basics)",
          path: "/pytest/basics/core-concepts/fixtures-basics"
        }
      ]
    }
  ]
};

export default Basics;