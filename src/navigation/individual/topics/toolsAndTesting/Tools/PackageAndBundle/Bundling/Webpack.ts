import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Tools/PackageAndBundle/Bundling/Webpack/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Tools/PackageAndBundle/Bundling/Webpack/Advanced';

const Webpack: Subpage = {
  name: "Webpack",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Webpack;