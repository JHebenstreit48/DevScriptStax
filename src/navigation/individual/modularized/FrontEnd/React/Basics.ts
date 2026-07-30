import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/React/Basics/Fundamentals';
import SetupStructure from '@/navigation/individual/modularized/FrontEnd/React/Basics/SetupAndStructure';
import CoreConcepts from '@/navigation/individual/modularized/FrontEnd/React/Basics/CoreConcepts';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    SetupStructure,
    CoreConcepts
  ]
};

export default Basics;