import type { Subpage } from '@/types/navigation';

import MergingAndHistory from "@/Navigation/Individual/Granularized/Tools/Containerization/Git/Advanced/MergingAndHistory";
import Tools from "@/Navigation/Individual/Granularized/Tools/Containerization/Git/Advanced/Tools";
import PerformanceAndSecurity from "@/Navigation/Individual/Granularized/Tools/Containerization/Git/Advanced/PerformanceAndSecurity";
import RemotePlatforms from "@/Navigation/Individual/Granularized/Tools/Containerization/Git/Advanced/RemotePlatforms";

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