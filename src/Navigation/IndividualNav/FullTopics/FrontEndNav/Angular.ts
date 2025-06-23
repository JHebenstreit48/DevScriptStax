import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import AngularBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics';
import AngularCoreConcepts from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/CoreConcepts';
import AngularAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced';
import AngularSecurity from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Security';
import AngularTesting from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Testing';

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