import type { Subpage } from '@/types/navigation';

import Fundamentals from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Fundamentals";
import Firestore from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Firestore";
import RealtimeDatabase from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Basics/RealtimeDatabase";
import Authentication from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Authentication";
import Storage from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Basics/Storage";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Firestore,
    RealtimeDatabase,
    Authentication,
    Storage
  ]
};

export default Basics;