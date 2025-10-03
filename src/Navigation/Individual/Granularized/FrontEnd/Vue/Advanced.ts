import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import FrameworkFeatures from '@/Navigation/Individual/Granularized/FrontEnd/Vue/Advanced/FrameworkFeatures';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/Vue/Advanced/BestPractices';

const VueAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    FrameworkFeatures,
    BestPractices
  ]
};

export default VueAdvanced;