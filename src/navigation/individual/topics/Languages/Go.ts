import type { Subpage } from '@/types/navigation';

import GoBasics from '@/navigation/individual/modularized/Languages/Go/Basics';
import GoIntermediate from '@/navigation/individual/modularized/Languages/Go/Intermediate';
import GoAdvanced from '@/navigation/individual/modularized/Languages/Go/Advanced';

const Go: Subpage = {
  name: 'Go',
  subpages: [
    GoBasics,
    GoIntermediate,
    GoAdvanced
  ]
};

export default Go;