import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import ReduxBasics from '@/Navigation/Individual/Granularized/FrontEnd/Redux/Basics';
import ReduxIntermediate from '@/Navigation/Individual/Granularized/FrontEnd/Redux/Intermediate';
import ReduxAdvanced from '@/Navigation/Individual/Granularized/FrontEnd/Redux/Advanced';

const Redux: Subpage = {
  name: 'Redux',
  subpages: [
    ReduxBasics,
    ReduxIntermediate,
    ReduxAdvanced
  ]
};

export default Redux;