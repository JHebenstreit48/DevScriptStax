import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/Rust/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/Rust/Advanced';

const Rust: Subpage = {
  name: 'Rust',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Rust;