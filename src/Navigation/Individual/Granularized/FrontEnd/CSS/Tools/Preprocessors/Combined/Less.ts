import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/Advanced';

const Less: Subpage = {
  name: 'Less',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Less;