import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

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