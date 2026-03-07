import type { Subpage } from '@/types/navigation';

import Babel from '@/Navigation/Individual/Topics/Tools/PackageAndBundle/Bundling/Babel';
import Webpack from '@/Navigation/Individual/Topics/Tools/PackageAndBundle/Bundling/Webpack';

const Bundling: Subpage = {
  name: 'Bundling',
  subpages: [
    Babel,
    Webpack
  ],
};

export default Bundling;