import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Testing/End2End/Playwright/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Testing/End2End/Playwright/Advanced';

const Playwright: Subpage = {
  name: 'Playwright',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Playwright;