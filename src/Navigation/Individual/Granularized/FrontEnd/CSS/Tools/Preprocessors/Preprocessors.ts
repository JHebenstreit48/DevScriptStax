import type { Subpage } from '@/types/navigation';

import Less from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Combined/Less';
import Sass from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Combined/Sass';

const Preprocessors: Subpage = {
  name: 'Preprocessors',
  subpages: [
    Less,
    Sass
  ],
};

export default Preprocessors;