import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Advanced';
import Testing from '@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Testing';

const Angular: Subpage = {
  name: 'Angular',
  subpages: [
    Basics,
    Advanced,
    Testing
  ]
};

export default Angular;