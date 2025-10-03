import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Workspaces",
      subpages: [
        {
          name: "Workspace Config",
          path: "/tools/package-management/pnpm/advanced/workspaces/config"
        },
        {
          name: "Filtering & Recursive",
          path: "/tools/package-management/pnpm/advanced/workspaces/filtering-recursive"
        }
      ]
    },
    {
      name: "Node Modules Layout",
      subpages: [
        {
          name: "Symlinked Structure",
          path: "/tools/package-management/pnpm/advanced/node-modules/symlinked-structure"
        },
        {
          name: "Hoisting Options",
          path: "/tools/package-management/pnpm/advanced/node-modules/hoisting"
        }
      ]
    },
    {
      name: "Perf & Dedup",
      subpages: [
        {
          name: "Global Store Perf",
          path: "/tools/package-management/pnpm/advanced/perf/global-store"
        },
        {
          name: "Deduplicate & Overrides",
          path: "/tools/package-management/pnpm/advanced/perf/dedupe-overrides"
        }
      ]
    },
    {
      name: "CI & Security",
      subpages: [
        {
          name: "CI Integration",
          path: "/tools/package-management/pnpm/advanced/ci-security/ci"
        },
        {
          name: "Lockfile & Audit",
          path: "/tools/package-management/pnpm/advanced/ci-security/lockfile-audit"
        }
      ]
    }
  ]
};

export default Advanced;