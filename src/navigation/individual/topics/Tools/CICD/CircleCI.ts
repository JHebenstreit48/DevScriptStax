import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/CICD/CircleCI/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/CICD/CircleCI/Advanced';

const CircleCI: Subpage = {
  name: "CircleCI",
  subpages: [
    Basics,
    Advanced
  ],
};

export default CircleCI;