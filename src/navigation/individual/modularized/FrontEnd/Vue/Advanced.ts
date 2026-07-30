import type { Subpage } from '@/types/navigation';

import FrameworkFeatures from '@/navigation/individual/modularized/FrontEnd/Vue/Advanced/FrameworkFeatures';
import BestPractices from '@/navigation/individual/modularized/FrontEnd/Vue/Advanced/BestPractices';

const VueAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    FrameworkFeatures,
    BestPractices
  ]
};

export default VueAdvanced;