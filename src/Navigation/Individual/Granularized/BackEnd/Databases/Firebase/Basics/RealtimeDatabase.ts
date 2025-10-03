import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const RealtimeDatabase: Subpage = {
  name: "Realtime Database",
  subpages: [
    {
      name: "Introduction",
      path: "/firebase/basics/realtime-db/overview",
    },
    {
      name: "Structure/Rules",
      path: "/firebase/basics/realtime-db/structure",
    },
    {
      name: "Reading/Writing Data",
      path: "/firebase/basics/realtime-db/reading-writing",
    },
    {
      name: "Listeners/Syncing",
      path: "/firebase/basics/realtime-db/listeners",
    },
  ],
};

export default RealtimeDatabase;