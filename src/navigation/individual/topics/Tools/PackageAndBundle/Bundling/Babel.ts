import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/PackageAndBundle/Bundling/Babel/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/PackageAndBundle/Bundling/Babel/Advanced';

const Babel: Subpage = {
  name: "Babel",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Babel;