import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/Svelte/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/Svelte/Advanced';

const Svelte: Subpage = {
  name: 'Svelte',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Svelte;