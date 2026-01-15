import type { Subpage } from '@/types/navigation';

import DataModelAndPerform from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Advanced/DataModelAndPerform";
import OfflinePatterns from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Advanced/OfflinePatterns";
import RulesAndEmulator from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Advanced/RulesAndEmulator";
import AdminSDK from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Advanced/AdminSDK";
import CostOptimization from "@/Navigation/Individual/Granularized/BackEnd/Databases/Firebase/Advanced/CostOptimization";

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