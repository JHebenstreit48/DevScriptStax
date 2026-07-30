import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced';

const Bootstrap: Subpage = {
  name: 'Bootstrap',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Bootstrap;