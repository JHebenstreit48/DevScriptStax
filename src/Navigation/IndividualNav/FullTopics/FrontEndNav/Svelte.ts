import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import SvelteBasics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/SvelteNav/Basics';
import SvelteAdvanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/SvelteNav/Advanced';

const Svelte: Subpage = {
  name: 'Svelte',
  subpages: [
    SvelteBasics,
    SvelteAdvanced
  ]
};

export default Svelte;