import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Functions from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced/Functions';
import OOP from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced/ObjectOriented';
import Modules from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced/Modules';
import PerformanceAndScale from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced/PerformanceAndScale';
import BestPractices from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced/BestPractices';
import Security from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced/Security';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Functions,
    OOP,
    Modules,
    PerformanceAndScale,
    BestPractices,
    Security
  ],
};

export default Advanced;