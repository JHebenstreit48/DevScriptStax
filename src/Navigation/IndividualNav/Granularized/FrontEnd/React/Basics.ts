import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactFundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Basics/Fundamentals';
import ReactSetupStructure from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Basics/SetupAndStructure';
import ReactCoreConcepts from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Basics/CoreConcepts';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    ReactFundamentals,
    ReactSetupStructure,
    ReactCoreConcepts
  ]
};

export default Basics;