import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Advanced';
import Testing from '@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Testing';

const Angular: Subpage = {
  name: 'Angular',
  subpages: [
    Basics,
    Advanced,
    Testing
  ]
};

export default Angular;