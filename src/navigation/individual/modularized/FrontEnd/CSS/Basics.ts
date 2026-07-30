import type { Subpage } from '@/types/navigation';

import IntroductionAndSelectors from '@/navigation/individual/modularized/FrontEnd/CSS/Basics/IntroductionAndSelectors';
import BoxModelAndPosition from '@/navigation/individual/modularized/FrontEnd/CSS/Basics/BoxModelAndPositioning';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    IntroductionAndSelectors,
    BoxModelAndPosition
  ]
};

export default Basics;