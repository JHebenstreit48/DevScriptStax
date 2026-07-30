import type { Subpage } from '@/types/navigation';

import DataModelAndPerform from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Advanced/DataModelAndPerform';
import OfflinePatterns from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Advanced/OfflinePatterns';
import RulesAndEmulator from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Advanced/RulesAndEmulator';
import AdminSDK from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Advanced/AdminSDK';
import CostOptimization from '@/navigation/individual/modularized/BackEnd/Databases/Firebase/Advanced/CostOptimization';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    DataModelAndPerform,
    OfflinePatterns,
    RulesAndEmulator,
    AdminSDK,
    CostOptimization
  ]
};

export default Advanced;