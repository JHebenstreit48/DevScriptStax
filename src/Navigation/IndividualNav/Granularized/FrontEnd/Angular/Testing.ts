import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Unit from '@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Tests/Unit';
import EndToEnd from '@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Tests/End2End';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    Unit,
    EndToEnd
  ]
};

export default Testing;