import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Generics",
      subpages: [
        {
          name: "Type Params",
          path: "/dart/advanced/generics/type-params"
        },
        {
          name: "Typedefs",
          path: "/dart/advanced/generics/typedefs"
        }
      ]
    },
    {
      name: "Async & Streams",
      subpages: [
        {
          name: "Futures & await",
          path: "/dart/advanced/async/futures-await"
        },
        {
          name: "Streams",
          path: "/dart/advanced/async/streams"
        }
      ]
    },
    {
      name: "Isolates",
      subpages: [
        {
          name: "Basics",
          path: "/dart/advanced/isolates/basics"
        },
        {
          name: "Message Passing",
          path: "/dart/advanced/isolates/message-passing"
        }
      ]
    },
    {
      name: "Interop",
      subpages: [
        {
          name: "FFI",
          path: "/dart/advanced/interop/ffi"
        },
        {
          name: "JS Interop",
          path: "/dart/advanced/interop/js"
        }
      ]
    },
    {
      name: "Meta & Anno",
      subpages: [
        {
          name: "Annotations",
          path: "/dart/advanced/meta-anno/annotations"
        },
        {
          name: "Source Gen",
          path: "/dart/advanced/meta-anno/source-gen"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "DevTools",
          path: "/dart/advanced/perf/devtools"
        },
        {
          name: "Memory & GC",
          path: "/dart/advanced/perf/memory-gc"
        }
      ]
    }
  ]
};

export default Advanced;