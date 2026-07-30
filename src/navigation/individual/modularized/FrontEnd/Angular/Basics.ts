import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/Angular/Basics/Fundamentals';
import Structure from '@/navigation/individual/modularized/FrontEnd/Angular/Basics/Structure';
import CoreConcepts from '@/navigation/individual/modularized/FrontEnd/Angular/Basics/CoreConcepts';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Structure,
    CoreConcepts
  ],
};

export default Basics;