import type { Subpage } from '@/types/navigation';

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