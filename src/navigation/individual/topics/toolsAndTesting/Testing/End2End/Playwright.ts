import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Testing/End2End/Playwright/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Testing/End2End/Playwright/Advanced';

const Playwright: Subpage = {
  name: 'Playwright',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Playwright;