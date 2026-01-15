import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/Testing/End2End/Cypress/Basics/Fundamentals';
import Structure from '@/Navigation/Individual/Granularized/Testing/End2End/Cypress/Basics/Structure';
import Syntax from '@/Navigation/Individual/Granularized/Testing/End2End/Cypress/Basics/Syntax';
import CoreCommands from '@/Navigation/Individual/Granularized/Testing/End2End/Cypress/Basics/CoreCommands';

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