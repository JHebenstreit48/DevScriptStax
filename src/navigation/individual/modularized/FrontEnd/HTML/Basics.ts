import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/Fundamentals';
import Structure from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/Structure';
import FormsAndSemantics from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/FormsAndSemantics';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Structure,
    FormsAndSemantics
  ]
};

export default Basics;