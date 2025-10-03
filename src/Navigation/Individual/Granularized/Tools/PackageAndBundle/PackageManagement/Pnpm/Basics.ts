import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro to pnpm",
          path: "/tools/package-management/pnpm/basics/fundamentals/intro"
        },
        {
          name: "Why pnpm?",
          path: "/tools/package-management/pnpm/basics/fundamentals/why-pnpm"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Install & Init",
          path: "/tools/package-management/pnpm/basics/setup/install-init"
        },
        {
          name: "Config & Store",
          path: "/tools/package-management/pnpm/basics/setup/config-store"
        }
      ]
    },
    {
      name: "Usage & Scripts",
      subpages: [
        {
          name: "Add / Remove / Update",
          path: "/tools/package-management/pnpm/basics/usage/add-remove-update"
        },
        {
          name: "Run Scripts",
          path: "/tools/package-management/pnpm/basics/usage/scripts"
        }
      ]
    },
    {
      name: "Store Basics",
      subpages: [
        {
          name: "Global Store",
          path: "/tools/package-management/pnpm/basics/store/global-store"
        },
        {
          name: "Prune & Clean",
          path: "/tools/package-management/pnpm/basics/store/prune-clean"
        }
      ]
    }
  ]
};

export default Basics;