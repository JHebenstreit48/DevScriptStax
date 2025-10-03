import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Languages/Dart/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/Dart/Advanced';
import Testing from '@/Navigation/Individual/Granularized/Languages/Dart/Testing';
import Tools from '@/Navigation/Individual/Granularized/Languages/Dart/Tools';

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