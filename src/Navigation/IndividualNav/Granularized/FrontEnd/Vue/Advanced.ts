import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import FrameworkFeatures from '@/Navigation/IndividualNav/Granularized/FrontEnd/Vue/Advanced/FrameworkFeatures';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/Vue/Advanced/BestPractices';

const VueAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
    FrameworkFeatures,
    BestPractices
  ]
};

export default VueAdvanced;