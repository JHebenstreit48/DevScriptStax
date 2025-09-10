import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Advanced';

const Svelte: Subpage = {
  name: 'Svelte',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Svelte;