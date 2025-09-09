import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/Dart/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/Dart/Advanced';
import Testing from '@/Navigation/IndividualNav/Granularized/Languages/Dart/Testing';
import Tools from '@/Navigation/IndividualNav/Granularized/Languages/Dart/Tools';

const Dart: Subpage = {
  name: 'Dart',
  subpages: [
    Basics,
    Advanced,
    Testing,
    Tools
  ]
};

export default Dart;