import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/Dart/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/Dart/Advanced';
import Testing from '@/navigation/individual/modularized/Languages/Dart/Testing';
import Tools from '@/navigation/individual/modularized/Languages/Dart/Tools';

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