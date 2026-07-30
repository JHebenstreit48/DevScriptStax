import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Basics/Fundamentals';
import Syntax from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Basics/Syntax';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Syntax,
  ],
};

export default Basics;