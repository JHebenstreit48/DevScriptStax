import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import DataModelAndPerform from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Advanced/DataModelAndPerform";
import OfflinePatterns from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Advanced/OfflinePatterns";
import RulesAndEmulator from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Advanced/RulesAndEmulator";
import AdminSDK from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Advanced/AdminSDK";
import CostOptimization from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/Firebase/Advanced/CostOptimization";

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
