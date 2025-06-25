import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import VueBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/VueNav/Basics';
import VueAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/VueNav/Advanced';

const VueNav: Subpage = {
  name: 'Vue',
  subpages: [
    VueBasics,
    VueAdvanced
  ]
};

export default VueNav;