import type { Subpage } from '@/types/navigation';

import Topics from '@/navigation/individual/modularized/FrontEnd/HTML/Advanced/Topics';
import BestPractices from '@/navigation/individual/modularized/FrontEnd/HTML/Advanced/BestPractices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Topics,
    BestPractices
  ]
};

export default Advanced;