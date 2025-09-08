import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/DartNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/DartNav/Advanced';
import Testing from '@/Navigation/IndividualNav/Granularized/LanguagesNav/DartNav/Testing';
import Tools from '@/Navigation/IndividualNav/Granularized/LanguagesNav/DartNav/Tools';

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