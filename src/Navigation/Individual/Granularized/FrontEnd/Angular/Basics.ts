import type { Subpage } from '@/types/navigation';

import Fundamentals from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics/Fundamentals";
import Structure from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics/Structure";
import CoreConcepts from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics/CoreConcepts";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Structure,
    CoreConcepts
  ],
};

export default Basics;