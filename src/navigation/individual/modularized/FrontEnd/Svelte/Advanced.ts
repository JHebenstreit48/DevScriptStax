import type { Subpage } from '@/types/navigation';

import Concepts from '@/navigation/individual/modularized/FrontEnd/Svelte/Advanced/Concepts';
import BestPractices from '@/navigation/individual/modularized/FrontEnd/Svelte/Advanced/BestPractices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Concepts,
    BestPractices
  ]
};

export default Advanced;