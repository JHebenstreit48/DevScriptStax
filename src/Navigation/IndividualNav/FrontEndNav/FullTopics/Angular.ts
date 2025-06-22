import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import AngularBasics from '@/Navigation/IndividualNav/FrontEndNav/Granularized/AngularNav/Basics';
import AngularCoreConcepts from '@/Navigation/IndividualNav/FrontEndNav/Granularized/AngularNav/CoreConcepts';
import AngularAdvanced from '@/Navigation/IndividualNav/FrontEndNav/Granularized/AngularNav/Advanced';
import AngularSecurity from '@/Navigation/IndividualNav/FrontEndNav/Granularized/AngularNav/Security';
import AngularTesting from '@/Navigation/IndividualNav/FrontEndNav/Granularized/AngularNav/Testing';

const AngularNav: Subpage = {
  name: 'Angular',
  subpages: [
    AngularBasics,
    AngularCoreConcepts,
    AngularAdvanced,
    AngularSecurity,
    AngularTesting
  ]
};

export default AngularNav;