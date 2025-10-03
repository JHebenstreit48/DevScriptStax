import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Language",
      subpages: [
        {
          name: "Metaprogramming",
          path: "/languages/ruby/advanced/language/metaprogramming"
        },
        {
          name: "Mixins & Refinements",
          path: "/languages/ruby/advanced/language/mixins-refinements"
        },
        {
          name: "Enumerators & Lazy",
          path: "/languages/ruby/advanced/language/enumerators-lazy"
        }
      ]
    },
    {
      name: "Concurrency",
      subpages: [
        {
          name: "Threads & Fibers",
          path: "/languages/ruby/advanced/concurrency/threads-fibers"
        },
        {
          name: "Ractors",
          path: "/languages/ruby/advanced/concurrency/ractors"
        }
      ]
    },
    {
      name: "Perf & Tooling",
      subpages: [
        {
          name: "Profiling",
          path: "/languages/ruby/advanced/perf-tooling/profiling"
        },
        {
          name: "GC & Memory",
          path: "/languages/ruby/advanced/perf-tooling/gc-memory"
        }
      ]
    }
  ]
};

export default Advanced;