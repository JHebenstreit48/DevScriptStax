import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/CSS/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/CSS/Advanced';
import Tools from '@/navigation/individual/modularized/FrontEnd/CSS/Tools';

const CSS: Subpage = {
  name: 'CSS',
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default CSS;