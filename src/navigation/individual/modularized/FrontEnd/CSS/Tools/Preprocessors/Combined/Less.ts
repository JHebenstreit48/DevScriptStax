import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Less/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Less/Advanced';

const Less: Subpage = {
  name: 'Less',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Less;