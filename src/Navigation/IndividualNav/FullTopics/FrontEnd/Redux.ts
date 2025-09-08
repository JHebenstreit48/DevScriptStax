import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReduxBasics from '@/Navigation/IndividualNav/Granularized/FrontEnd/Redux/Basics';
import ReduxIntermediate from '@/Navigation/IndividualNav/Granularized/FrontEnd/Redux/Intermediate';
import ReduxAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/Redux/Advanced';

const Redux: Subpage = {
  name: 'Redux',
  subpages: [
    ReduxBasics,
    ReduxIntermediate,
    ReduxAdvanced
  ]
};

export default Redux;