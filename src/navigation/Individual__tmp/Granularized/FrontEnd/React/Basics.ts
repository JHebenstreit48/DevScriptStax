import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/React/Basics/Fundamentals';
import SetupStructure from '@/Navigation/Individual/Granularized/FrontEnd/React/Basics/SetupAndStructure';
import CoreConcepts from '@/Navigation/Individual/Granularized/FrontEnd/React/Basics/CoreConcepts';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    SetupStructure,
    CoreConcepts
  ]
};

export default Basics;