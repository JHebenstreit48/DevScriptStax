import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics/Fundamentals";
import Structure from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics/Structure";
import CoreConcepts from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics/CoreConcepts";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Structure,
    CoreConcepts
  ],
};

export default Basics;