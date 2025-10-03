import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import ReactFundamentals from '@/Navigation/Individual/Granularized/FrontEnd/React/Basics/Fundamentals';
import ReactSetupStructure from '@/Navigation/Individual/Granularized/FrontEnd/React/Basics/SetupAndStructure';
import ReactCoreConcepts from '@/Navigation/Individual/Granularized/FrontEnd/React/Basics/CoreConcepts';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    ReactFundamentals,
    ReactSetupStructure,
    ReactCoreConcepts
  ]
};

export default Basics;