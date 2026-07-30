import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced';

const ReactBoostrap: Subpage = {
  name: 'React Bootstrap',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default ReactBoostrap;