import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Languages/Rust/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/Rust/Advanced';

const Rust: Subpage = {
  name: 'Rust',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Rust;