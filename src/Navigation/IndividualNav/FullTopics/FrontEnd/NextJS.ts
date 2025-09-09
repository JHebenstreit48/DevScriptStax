import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/NextJS/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/NextJS/Advanced';

const NextJS: Subpage = {
  name: 'Next.js',
  subpages: [
    Basics,
    Advanced
  ]
};

export default NextJS;