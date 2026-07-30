import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/CICD/Jenkins/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/CICD/Jenkins/Advanced';

const Jenkins: Subpage = {
  name: "Jenkins",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Jenkins;