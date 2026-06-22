import type { Subpage } from '@/types/navigation';

import EndToEnd from '@/Navigation/Individual/Topics/Testing/End2End';
import Framework from '@/Navigation/Individual/Topics/Testing/Framework';
import Unit from '@/Navigation/Individual/Topics/Testing/Unit';

// ---------- Unit Testing Navigation End ----------

const testing: Subpage = {
  name: 'Testing',
  subpages: [
    EndToEnd,
    Framework,
    Unit
  ]
};

export default testing;