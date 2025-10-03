import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Functions from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced/Functions';
import OOP from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced/ObjectOriented';
import Modules from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced/Modules';
import PerformanceAndScale from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced/PerformanceAndScale';
import BestPractices from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced/BestPractices';
import Security from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced/Security';

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