import type { Subpage } from '@/types/navigation';

const OfflinePatterns: Subpage = {
  name: "Offline Patterns",
  subpages: [
    {
      name: "SDK Offline & Caching",
      path: "/firebase/advanced/offline-patterns/sdk-offline"
    },
    {
      name: "Sync & Conflict Resolution",
      path: "/firebase/advanced/offline-patterns/conflict-resolution"
    }
  ]
};

export default OfflinePatterns;