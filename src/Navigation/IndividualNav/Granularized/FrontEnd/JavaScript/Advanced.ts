import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Functions from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Advanced/Functions';
import OOP from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Advanced/ObjectOriented';
import Modules from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Advanced/Modules';
import PerformanceAndScale from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Advanced/PerformanceAndScale';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Advanced/BestPractices';
import Security from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Advanced/Security';

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