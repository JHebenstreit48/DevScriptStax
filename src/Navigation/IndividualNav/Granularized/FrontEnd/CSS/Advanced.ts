import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Layouts from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Advanced/Layouts';
import Effects from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Advanced/Effects';
import ResponseAndVar from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Advanced/ResponseAndVar';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    Layouts,
    Effects,
    ResponseAndVar,
  ]
};

export default Advanced;