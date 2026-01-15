import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro to Yarn",
          path: "/tools/package-management/yarn/basics/fundamentals/intro"
        },
        {
          name: "Key Concepts",
          path: "/tools/package-management/yarn/basics/fundamentals/concepts"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Init",
          path: "/tools/package-management/yarn/basics/setup/install-init"
        },
        {
          name: "Config (.yarnrc*)",
          path: "/tools/package-management/yarn/basics/setup/config"
        }
      ]
    },
    {
      name: "Usage & Scripts",
      subpages: [
        {
          name: "Add / Remove / Update",
          path: "/tools/package-management/yarn/basics/usage/add-remove-update"
        },
        {
          name: "Run Scripts",
          path: "/tools/package-management/yarn/basics/usage/scripts"
        }
      ]
    },
    {
      name: "Workspaces (Basics)",
      subpages: [
        {
          name: "Intro to Workspaces",
          path: "/tools/package-management/yarn/basics/workspaces/intro"
        },
        {
          name: "Monorepo Setup",
          path: "/tools/package-management/yarn/basics/workspaces/monorepo-setup"
        }
      ]
    }
  ]
};

export default Basics;