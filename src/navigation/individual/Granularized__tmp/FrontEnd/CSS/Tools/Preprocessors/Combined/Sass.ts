import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Advanced';

const Sass: Subpage = {
  name: 'Sass',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Sass;