import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import AngularBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics';
import AngularAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced';
import AngularTesting from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Testing';

const AngularNav: Subpage = {
  name: 'Angular',
  subpages: [
    AngularBasics,
    AngularAdvanced,
    AngularTesting
  ]
};

export default AngularNav;