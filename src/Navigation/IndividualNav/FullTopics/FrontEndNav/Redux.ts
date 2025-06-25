import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReduxBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/Redux/Basics';
import ReduxIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEndNav/Redux/Intermediate';
import ReduxAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/Redux/Advanced';

const ReduxNav: Subpage = {
  name: 'Redux',
  subpages: [
    ReduxBasics,
    ReduxIntermediate,
    ReduxAdvanced
  ]
};

export default ReduxNav;