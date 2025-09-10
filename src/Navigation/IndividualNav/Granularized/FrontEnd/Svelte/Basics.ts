import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Basics/Fundamentals';
import CoreConcepts from '@/Navigation/IndividualNav/Granularized/FrontEnd/Svelte/Basics/CoreConcepts';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts
  ]
};

export default Basics;