import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Cache & Targets",
          path: "/tools/bundling/babel/advanced/perf/cache-targets"
        },
        {
          name: "Plugin Tuning",
          path: "/tools/bundling/babel/advanced/perf/plugin-tuning"
        }
      ]
    },
    {
      name: "Integration",
      subpages: [
        {
          name: "With Webpack",
          path: "/tools/bundling/babel/advanced/integration/webpack"
        },
        {
          name: "With Jest",
          path: "/tools/bundling/babel/advanced/integration/jest"
        }
      ]
    }
  ]
};

export default Advanced;