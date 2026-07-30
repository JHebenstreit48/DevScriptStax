import type { Subpage } from '@/types/navigation';

import Concepts from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Advanced/Concepts';
import BestPractices from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Advanced/BestPractices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Concepts,
    BestPractices,
  ],
};

export default Advanced;