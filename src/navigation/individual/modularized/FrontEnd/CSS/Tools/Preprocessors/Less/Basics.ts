import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Less/Basics/Fundamentals';
import CoreFeatures from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Less/Basics/CoreFeatures';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreFeatures,
  ],
};

export default Basics;