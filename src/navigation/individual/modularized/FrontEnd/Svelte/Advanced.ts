import type { Subpage } from '@/types/navigation';

import Concepts from '@/Navigation/Individual/Granularized/FrontEnd/Svelte/Advanced/Concepts';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/Svelte/Advanced/BestPractices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Concepts,
    BestPractices
  ]
};

export default Advanced;