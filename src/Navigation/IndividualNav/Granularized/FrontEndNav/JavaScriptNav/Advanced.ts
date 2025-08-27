import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Functions from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced/Functions';
import OOP from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced/ObjectOriented';
import Modules from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced/Modules';
import PerformanceAndScale from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced/PerformanceAndScale';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced/BestPractices';
import Security from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Advanced/Security';

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