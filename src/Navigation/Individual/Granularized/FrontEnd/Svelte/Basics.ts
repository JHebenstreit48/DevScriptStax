import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/Svelte/Basics/Fundamentals';
import CoreConcepts from '@/Navigation/Individual/Granularized/FrontEnd/Svelte/Basics/CoreConcepts';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts
  ]
};

export default Basics;