import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RealtimeDatabase: Subpage = {
  name: "Realtime Database",
  subpages: [
    {
      name: "Introduction",
      path: "/databases/firebase/realtime/overview",
    },
    {
      name: "Structure/Rules",
      path: "/databases/firebase/realtime/structure",
    },
    {
      name: "Reading/Writing Data",
      path: "/databases/firebase/realtime/reading-writing",
    },
    {
      name: "Listeners/Syncing",
      path: "/databases/firebase/realtime/listeners",
    },
  ],
};

export default RealtimeDatabase;