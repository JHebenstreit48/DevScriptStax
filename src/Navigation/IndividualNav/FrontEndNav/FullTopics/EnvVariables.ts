import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Essentials from '@/Navigation/IndividualNav/FrontEndNav/Granularized/EnvVariables/Essentials';
import Frameworks from '@/Navigation/IndividualNav/FrontEndNav/Granularized/EnvVariables/Frameworks';
import BestPractices from '@/Navigation/IndividualNav/FrontEndNav/Granularized/EnvVariables/BestPractices';

const EnvVariables: Subpage = {
  name: 'Environment Variables',
  subpages: [
    Essentials,
    Frameworks,
    BestPractices
  ]
};

export default EnvVariables;