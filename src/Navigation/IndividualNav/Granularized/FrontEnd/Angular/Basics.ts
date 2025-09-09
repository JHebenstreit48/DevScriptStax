import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics/Fundamentals";
import Structure from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics/Structure";
import CoreConcepts from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics/CoreConcepts";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Structure,
    CoreConcepts
  ],
};

export default Basics;