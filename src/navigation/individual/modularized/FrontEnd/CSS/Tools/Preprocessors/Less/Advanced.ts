import type { Subpage } from '@/types/navigation';

import Concepts from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Less/Advanced/Concepts';
import BestPractices from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Less/Advanced/BestPractices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Concepts,
    BestPractices,
  ],
};

export default Advanced;