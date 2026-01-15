import type { Subpage } from '@/types/navigation';

import Layouts from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Advanced/Layouts';
import Effects from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Advanced/Effects';
import ResponseAndVar from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Advanced/ResponseAndVar';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    Layouts,
    Effects,
    ResponseAndVar,
  ]
};

export default Advanced;