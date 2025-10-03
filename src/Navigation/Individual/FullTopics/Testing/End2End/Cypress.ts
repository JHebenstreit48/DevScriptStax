import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Testing/End2End/Cypress/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/Testing/End2End/Cypress/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/Testing/End2End/Cypress/Advanced';

const Cypress: Subpage = {
  name: 'Cypress',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default Cypress;