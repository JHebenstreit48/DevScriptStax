import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/NextJS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/NextJS/Advanced';

const NextJS: Subpage = {
  name: 'Next.js',
  subpages: [
    Basics,
    Advanced
  ]
};

export default NextJS;