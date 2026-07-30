import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Foundations/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Foundations/Advanced';

const Foundations: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Foundations;