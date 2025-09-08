import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Unit from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/TestingNav/Unit';
import EndToEnd from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/TestingNav/End2End';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    Unit,
    EndToEnd
  ]
};

export default Testing;