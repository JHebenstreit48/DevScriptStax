import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Playwright/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Testing/End2End/Playwright/Advanced';

const Playwright: Subpage = {
  name: 'Playwright',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Playwright;