import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Workspaces Deep Dive",
      subpages: [
        {
          name: "Protocols & Linking",
          path: "/tools/package-management/yarn/advanced/workspaces/protocols-linking"
        },
        {
          name: "Hoisting & Constraints",
          path: "/tools/package-management/yarn/advanced/workspaces/hoisting-constraints"
        }
      ]
    },
    {
      name: "Plug'n'Play (PnP)",
      subpages: [
        {
          name: "PnP Basics",
          path: "/tools/package-management/yarn/advanced/pnp/basics"
        },
        {
          name: "Troubleshooting PnP",
          path: "/tools/package-management/yarn/advanced/pnp/troubleshooting"
        }
      ]
    },
    {
      name: "Perf & Cache",
      subpages: [
        {
          name: "Offline Cache",
          path: "/tools/package-management/yarn/advanced/perf/offline-cache"
        },
        {
          name: "Selective Installs",
          path: "/tools/package-management/yarn/advanced/perf/selective-installs"
        }
      ]
    },
    {
      name: "CI & Security",
      subpages: [
        {
          name: "CI Integration",
          path: "/tools/package-management/yarn/advanced/ci-security/ci"
        },
        {
          name: "Resolutions & Audits",
          path: "/tools/package-management/yarn/advanced/ci-security/resolutions-audit"
        }
      ]
    }
  ]
};

export default Advanced;