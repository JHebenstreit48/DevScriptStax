import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Basics/Fundamentals";
import Firestore from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Basics/Firestore";
import RealtimeDatabase from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Basics/RealtimeDatabase";
import Authentication from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Basics/Authentication";
import Storage from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Basics/Storage";

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