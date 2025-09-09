import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import MergingAndHistory from "@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Advanced/MergingAndHistory";
import Tools from "@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Advanced/Tools";
import PerformanceAndSecurity from "@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Advanced/PerformanceAndSecurity";
import RemotePlatforms from "@/Navigation/IndividualNav/Granularized/Tools/Containerization/Git/Advanced/RemotePlatforms";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    MergingAndHistory,
    Tools,
    PerformanceAndSecurity,
    RemotePlatforms
  ]
};

export default Advanced;