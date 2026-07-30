import type { Subpage } from '@/types/navigation';

import Unit from '@/Navigation/Individual/Granularized/FrontEnd/Angular/Tests/Unit';
import EndToEnd from '@/Navigation/Individual/Granularized/FrontEnd/Angular/Tests/End2End';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    Unit,
    EndToEnd
  ]
};

export default Testing;