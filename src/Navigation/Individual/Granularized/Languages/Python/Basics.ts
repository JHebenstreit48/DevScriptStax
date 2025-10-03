import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Fundamentals from "@/Navigation/Individual/Granularized/Languages/Python/Basics/Fundamentals";
import CoreConcepts from "@/Navigation/Individual/Granularized/Languages/Python/Basics/CoreConcepts";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    CoreConcepts
  ],
};

export default Basics;