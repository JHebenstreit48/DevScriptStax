import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Basics/Fundamentals";
import Firestore from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Basics/Firestore";
import RealtimeDatabase from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Basics/RealtimeDatabase";
import Authentication from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Basics/Authentication";
import Storage from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Basics/Storage";

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