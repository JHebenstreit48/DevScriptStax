import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Errors",
      subpages: [
        {
          name: "Basics & Wrapping",
          path: "/go/advanced/errors/basics-wrapping"
        },
        {
          name: "Sentinel vs Is/As",
          path: "/go/advanced/errors/sentinel-is-as"
        }
      ]
    },
    {
      name: "Modules",
      subpages: [
        {
          name: "Go Modules",
          path: "/go/advanced/modules/go-modules"
        },
        {
          name: "Versioning",
          path: "/go/advanced/modules/versioning"
        }
      ]
    },
    {
      name: "Concurrency+",
      subpages: [
        {
          name: "Context & Cancel",
          path: "/go/advanced/concurrency/context-cancel"
        },
        {
          name: "Worker Pools",
          path: "/go/advanced/concurrency/worker-pools"
        }
      ]
    },
    {
      name: "Performance & Memory",
      subpages: [
        {
          name: "Memory Mgmt",
          path: "/go/advanced/performance/memory"
        },
        {
          name: "Optimization",
          path: "/go/advanced/performance/optimization"
        }
      ]
    }
  ]
};

export default Advanced;