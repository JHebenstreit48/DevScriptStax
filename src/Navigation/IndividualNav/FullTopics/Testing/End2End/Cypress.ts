import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tests/End2End/CypressNav/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/Tests/End2End/CypressNav/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/Tests/End2End/CypressNav/Advanced';

const Cypress: Subpage = {
  name: 'Cypress',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default Cypress;