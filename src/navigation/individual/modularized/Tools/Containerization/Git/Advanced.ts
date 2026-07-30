import type { Subpage } from '@/types/navigation';

import MergingAndHistory from '@/navigation/individual/modularized/Tools/Containerization/Git/Advanced/MergingAndHistory';
import Tools from '@/navigation/individual/modularized/Tools/Containerization/Git/Advanced/Tools';
import PerformanceAndSecurity from '@/navigation/individual/modularized/Tools/Containerization/Git/Advanced/PerformanceAndSecurity';
import RemotePlatforms from '@/navigation/individual/modularized/Tools/Containerization/Git/Advanced/RemotePlatforms';

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