import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Basics/Fundamentals';
import Structure from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Basics/Structure';
import FormsAndSemantics from '@/Navigation/IndividualNav/Granularized/FrontEnd/HTML/Basics/FormsAndSemantics';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Structure,
    FormsAndSemantics
  ]
};

export default Basics;