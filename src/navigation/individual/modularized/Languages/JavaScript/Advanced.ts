import type { Subpage } from '@/types/navigation';

import Functions from '@/navigation/individual/modularized/Languages/JavaScript/Advanced/Functions';
import OOP from '@/navigation/individual/modularized/Languages/JavaScript/Advanced/ObjectOriented';
import Modules from '@/navigation/individual/modularized/Languages/JavaScript/Advanced/Modules';
import PerformanceAndScale from '@/navigation/individual/modularized/Languages/JavaScript/Advanced/PerformanceAndScale';
import BestPractices from '@/navigation/individual/modularized/Languages/JavaScript/Advanced/BestPractices';
import Security from '@/navigation/individual/modularized/Languages/JavaScript/Advanced/Security';

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