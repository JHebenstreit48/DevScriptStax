import type { Subpage } from '@/types/navigation';

import Babel from '@/navigation/individual/topics/Tools/PackageAndBundle/Bundling/Babel';
import Webpack from '@/navigation/individual/topics/Tools/PackageAndBundle/Bundling/Webpack';

const Bundling: Subpage = {
  name: 'Bundling',
  subpages: [
    Babel,
    Webpack
  ],
};

export default Bundling;