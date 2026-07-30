import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/PackageAndBundle/Bundling/Babel/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/PackageAndBundle/Bundling/Babel/Advanced';

const Babel: Subpage = {
  name: "Babel",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Babel;