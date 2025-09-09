import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GoBasics from '@/Navigation/IndividualNav/Granularized/Languages/Go/Basics';
import GoIntermediate from '@/Navigation/IndividualNav/Granularized/Languages/Go/Intermediate';
import GoAdvanced from '@/Navigation/IndividualNav/Granularized/Languages/Go/Advanced';

const Go: Subpage = {
  name: 'Go',
  subpages: [
    GoBasics,
    GoIntermediate,
    GoAdvanced
  ]
};

export default Go;