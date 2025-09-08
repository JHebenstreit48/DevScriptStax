import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import DataModelAndPerform from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Advanced/DataModelAndPerform";
import OfflinePatterns from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Advanced/OfflinePatterns";
import RulesAndEmulator from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Advanced/RulesAndEmulator";
import AdminSDK from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Advanced/AdminSDK";
import CostOptimization from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Advanced/CostOptimization";

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
