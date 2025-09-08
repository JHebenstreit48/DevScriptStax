import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/RustNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/RustNav/Advanced';

const Rust: Subpage = {
  name: 'Rust',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Rust;