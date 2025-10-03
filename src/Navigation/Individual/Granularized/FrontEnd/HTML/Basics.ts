import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Basics/Fundamentals';
import Structure from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Basics/Structure';
import FormsAndSemantics from '@/Navigation/Individual/Granularized/FrontEnd/HTML/Basics/FormsAndSemantics';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Structure,
    FormsAndSemantics
  ]
};

export default Basics;