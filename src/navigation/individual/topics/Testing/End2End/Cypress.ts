import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Testing/End2End/Cypress/Basics';
import Intermediate from '@/navigation/individual/modularized/Testing/End2End/Cypress/Intermediate';
import Advanced from '@/navigation/individual/modularized/Testing/End2End/Cypress/Advanced';

const Cypress: Subpage = {
  name: 'Cypress',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default Cypress;