import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Intermediate: Subpage = {
  name: "Intermediate",
  subpages: [
    {
      name: "Middleware & Async",
      subpages: [
        {
          name: "Middleware Concepts",
          path: "/redux/intermediate/middleware-async/middleware-concepts"
        },
        {
          name: "Async with Thunks",
          path: "/redux/intermediate/middleware-async/async-thunks"
        },
        {
          name: "Writing Middleware",
          path: "/redux/intermediate/middleware-async/writing-middleware"
        },
        {
          name: "Enhancers & Composition",
          path: "/redux/intermediate/middleware-async/enhancers-and-composition"
        },
        {
          name: "DevTools",
          path: "/redux/intermediate/middleware-async/devtools"
        }
      ]
    },
    {
      name: "RTK Query",
      subpages: [
        {
          name: "Queries & Mutations",
          path: "/redux/intermediate/rtk-query/queries-and-mutations"
        },
        {
          name: "Cache & Invalidation",
          path: "/redux/intermediate/rtk-query/cache-and-invalidation"
        },
        {
          name: "Error Handling & Retries",
          path: "/redux/intermediate/rtk-query/error-handling-and-retries"
        }
      ]
    },
    {
      name: "Selectors",
      subpages: [
        {
          name: "createSelector",
          path: "/redux/intermediate/selectors/create-selector"
        },
        {
          name: "Memoization & Pitfalls",
          path: "/redux/intermediate/selectors/memoization-and-pitfalls"
        }
      ]
    },
    {
      name: "TypeScript",
      subpages: [
        {
          name: "Typed Store & Dispatch",
          path: "/redux/intermediate/typescript/typed-store-and-dispatch"
        },
        {
          name: "Typed Hooks & PayloadAction",
          path: "/redux/intermediate/typescript/typed-hooks-and-payloadaction"
        }
      ]
    }
  ]
};

export default Intermediate;