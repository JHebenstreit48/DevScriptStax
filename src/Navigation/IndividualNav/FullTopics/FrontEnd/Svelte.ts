import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import SvelteBasics from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Basics';
import SvelteAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Advanced';

const Svelte: Subpage = {
  name: 'Svelte',
  subpages: [
    SvelteBasics,
    SvelteAdvanced
  ]
};

export default Svelte;