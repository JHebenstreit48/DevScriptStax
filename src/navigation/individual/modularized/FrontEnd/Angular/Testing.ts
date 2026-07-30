import type { Subpage } from '@/types/navigation';

import Unit from '@/navigation/individual/modularized/FrontEnd/Angular/Tests/Unit';
import EndToEnd from '@/navigation/individual/modularized/FrontEnd/Angular/Tests/End2End';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    Unit,
    EndToEnd
  ]
};

export default Testing;