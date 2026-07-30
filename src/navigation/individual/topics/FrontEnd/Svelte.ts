import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/Svelte/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/Svelte/Advanced';

const Svelte: Subpage = {
  name: 'Svelte',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Svelte;