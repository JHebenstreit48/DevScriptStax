import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Cypress/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Cypress/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Cypress/Advanced';

const Cypress: Subpage = {
  name: 'Cypress',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default Cypress;