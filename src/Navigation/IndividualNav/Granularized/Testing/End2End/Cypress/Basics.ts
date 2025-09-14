import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Cypress/Basics/Fundamentals';
import Structure from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Cypress/Basics/Structure';
import Syntax from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Cypress/Basics/Syntax';
import CoreCommands from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Cypress/Basics/CoreCommands';

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