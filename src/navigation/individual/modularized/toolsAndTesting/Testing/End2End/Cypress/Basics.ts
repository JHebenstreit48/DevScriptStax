import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/toolsAndTesting/Testing/End2End/Cypress/Basics/Fundamentals';
import Structure from '@/navigation/individual/modularized/toolsAndTesting/Testing/End2End/Cypress/Basics/Structure';
import Syntax from '@/navigation/individual/modularized/toolsAndTesting/Testing/End2End/Cypress/Basics/Syntax';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Structure,
    Syntax,
  ]
};

export default Basics;