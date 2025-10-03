import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import GoBasics from '@/Navigation/Individual/Granularized/Languages/Go/Basics';
import GoIntermediate from '@/Navigation/Individual/Granularized/Languages/Go/Intermediate';
import GoAdvanced from '@/Navigation/Individual/Granularized/Languages/Go/Advanced';

const Go: Subpage = {
  name: 'Go',
  subpages: [
    GoBasics,
    GoIntermediate,
    GoAdvanced
  ]
};

export default Go;