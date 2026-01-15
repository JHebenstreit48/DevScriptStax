import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture & Patterns",
      subpages: [
        {
          name: "Feature Folders & Slices",
          path: "/redux/advanced/architecture-patterns/feature-folders-and-slices"
        },
        {
          name: "Normalization & EntityAdapter",
          path: "/redux/advanced/architecture-patterns/normalization-and-entity-adapter"
        },
        {
          name: "Code Splitting (Lazy Reducers)",
          path: "/redux/advanced/architecture-patterns/code-splitting-lazy-reducers"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Avoiding Re-renders",
          path: "/redux/advanced/performance/avoiding-re-renders"
        },
        {
          name: "Batching & Subscriptions",
          path: "/redux/advanced/performance/batching-and-subscriptions"
        },
        {
          name: "Immutable Updates at Scale",
          path: "/redux/advanced/performance/immutable-updates-at-scale"
        }
      ]
    },
    {
      name: "Persistence & Sync",
      subpages: [
        {
          name: "redux-persist",
          path: "/redux/advanced/persistence-sync/redux-persist"
        },
        {
          name: "Cross-Tab Sync",
          path: "/redux/advanced/persistence-sync/cross-tab-sync"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Folder Structure",
          path: "/redux/advanced/best-practices/folder-structure"
        },
        {
          name: "Scalability",
          path: "/redux/advanced/best-practices/scalability"
        }
      ]
    }
  ]
};

export default Advanced;