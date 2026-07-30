import type { Subpage } from '@/types/navigation';

import ReduxBasics from '@/navigation/individual/modularized/FrontEnd/Redux/Basics';
import ReduxIntermediate from '@/navigation/individual/modularized/FrontEnd/Redux/Intermediate';
import ReduxAdvanced from '@/navigation/individual/modularized/FrontEnd/Redux/Advanced';

const Redux: Subpage = {
  name: 'Redux',
  subpages: [
    ReduxBasics,
    ReduxIntermediate,
    ReduxAdvanced
  ]
};

export default Redux;