import type { Subpage } from '@/types/navigation';

// ------------------------------------------------------- Basics Start -------------------------------------------------------
import Fundamentals from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Basics/Fundamentals';
import Authoring from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Basics/Authoring';
import DoublesAndIsolation from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Basics/DoublesAndIsolation';
import AsyncAndTimers from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Basics/AsyncAndTimers';
import ModulesAndState from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Basics/ModulesAndState';
// ------------------------------------------------------- Basics End ---------------------------------------------------------

// ------------------------------------------------------- Advanced Start -------------------------------------------------------
import StabilityAndData from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Advanced/StabilityAndData';
import Environment from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Advanced/Environment';
import CoverageAndQuality from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Advanced/CoverageAndQuality';
import Runners from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Advanced/Runners';
import CIAndDebug from '@/navigation/individual/modularized/Languages/JavaScript/Testing/Advanced/CIAndDebug';
// ------------------------------------------------------- Advanced End ---------------------------------------------------------

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Basics",
      subpages: [
        Fundamentals,
        Authoring,
        DoublesAndIsolation,
        AsyncAndTimers,
        ModulesAndState
      ]
    },
    {
      name: "Advanced",
      subpages: [
        StabilityAndData,
        Environment,
        CoverageAndQuality,
        Runners,
        CIAndDebug
      ]
    }
  ]
};

export default Testing;