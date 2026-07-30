import type { Subpage } from '@/types/navigation';

import Layouts from '@/navigation/individual/modularized/FrontEnd/CSS/Advanced/Layouts';
import Effects from '@/navigation/individual/modularized/FrontEnd/CSS/Advanced/Effects';
import ResponseAndVar from '@/navigation/individual/modularized/FrontEnd/CSS/Advanced/ResponseAndVar';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    Layouts,
    Effects,
    ResponseAndVar,
  ]
};

export default Advanced;