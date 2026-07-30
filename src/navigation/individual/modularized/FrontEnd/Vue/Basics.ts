import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/Vue/Basics/Fundamentals';
import CoreConcepts from '@/navigation/individual/modularized/FrontEnd/Vue/Basics/CoreConcepts';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts
  ]
};

export default Basics;