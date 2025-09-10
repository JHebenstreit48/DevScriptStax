import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Concepts from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Advanced/Concepts';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Advanced/BestPractices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    Concepts,
    BestPractices
  ]
};

export default Advanced;