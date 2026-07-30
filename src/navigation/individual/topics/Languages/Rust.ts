import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/Rust/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/Rust/Advanced';

const Rust: Subpage = {
  name: 'Rust',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Rust;