import type { Subpage } from '@/types/navigation';

import EndToEnd from '@/navigation/individual/topics/toolsAndTesting/Testing/End2End';
import Framework from '@/navigation/individual/topics/toolsAndTesting/Testing/Framework';
import Unit from '@/navigation/individual/topics/toolsAndTesting/Testing/Unit';

const testing: Subpage = {
  name: 'Testing',
  subpages: [
    EndToEnd,
    Framework,
    Unit
  ]
};

export default testing;