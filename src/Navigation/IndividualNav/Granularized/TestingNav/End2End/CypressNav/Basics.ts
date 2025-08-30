import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/TestingNav/End2End/CypressNav/Basics/Fundamentals';
import Structure from '@/Navigation/IndividualNav/Granularized/TestingNav/End2End/CypressNav/Basics/Structure';
import Syntax from '@/Navigation/IndividualNav/Granularized/TestingNav/End2End/CypressNav/Basics/Syntax';
import CoreCommands from '@/Navigation/IndividualNav/Granularized/TestingNav/End2End/CypressNav/Basics/CoreCommands';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Structure,
    Syntax,
    CoreCommands
  ]
};

export default Basics;
