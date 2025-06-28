import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactFundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Basics/Fundamentals';
import ReactSetupStructure from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Basics/SetupAndStructure';
import ReactCoreConcepts from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Basics/CoreConcepts';

const ReactBasics: Subpage = {
  name: 'Basics',
  subpages: [
    ReactFundamentals,
    ReactSetupStructure,
    ReactCoreConcepts
  ]
};

export default ReactBasics;