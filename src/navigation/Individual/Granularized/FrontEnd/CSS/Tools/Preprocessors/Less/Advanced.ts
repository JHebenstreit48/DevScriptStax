import type { Subpage } from '@/types/navigation';

import Concepts from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/Advanced/Concepts';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/Advanced/BestPractices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Concepts,
    BestPractices,
  ],
};

export default Advanced;