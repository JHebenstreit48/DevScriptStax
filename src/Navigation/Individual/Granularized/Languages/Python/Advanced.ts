import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Data Model",
      subpages: [
        {
          name: "Dunder Methods",
          path: "/python/advanced/datamodel/dunder-methods"
        },
        {
          name: "Iterators & Generators",
          path: "/python/advanced/datamodel/iterators-generators"
        }
      ]
    },
    {
      name: "Typing",
      subpages: [
        {
          name: "Generics & Protocols",
          path: "/python/advanced/typing/generics-protocols"
        },
        {
          name: "Type Narrowing & TypedDict",
          path: "/python/advanced/typing/narrowing-typeddict"
        }
      ]
    },
    {
      name: "Concurrency",
      subpages: [
        {
          name: "Multithreading",
          path: "/python/advanced/concurrency/multithreading"
        },
        {
          name: "Multiprocessing",
          path: "/python/advanced/concurrency/multiprocessing"
        },
        {
          name: "Asyncio Patterns",
          path: "/python/advanced/concurrency/asyncio-patterns"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Optimization",
          path: "/python/advanced/performance/optimization"
        },
        {
          name: "Profiling",
          path: "/python/advanced/performance/profiling"
        },
        {
          name: "Memory Management",
          path: "/python/advanced/performance/memory"
        }
      ]
    },
    {
      name: "Metaprogramming",
      subpages: [
        {
          name: "Decorators & Descriptors",
          path: "/python/advanced/metaprogramming/decorators-descriptors"
        },
        {
          name: "Metaclasses",
          path: "/python/advanced/metaprogramming/metaclasses"
        }
      ]
    },
    {
      name: "Packaging",
      subpages: [
        {
          name: "Distributions",
          path: "/python/advanced/packaging/distributions"
        },
        {
          name: "Publishing",
          path: "/python/advanced/packaging/publishing"
        }
      ]
    }
  ]
};

export default Advanced;