import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Advanced';
import Tools from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools';

const CSS: Subpage = {
  name: 'CSS',
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default CSS;