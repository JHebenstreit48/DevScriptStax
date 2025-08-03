import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import VueBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/VueNav/Basics';
import VueAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/VueNav/Advanced';

const Vue: Subpage = {
  name: 'Vue',
  subpages: [
    VueBasics,
    VueAdvanced
  ]
};

export default Vue;