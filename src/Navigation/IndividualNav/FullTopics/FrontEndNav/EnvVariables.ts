import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Essentials from '@/Navigation/IndividualNav/Granularized/FrontEndNav/EnvVariables/Essentials';
import Frameworks from '@/Navigation/IndividualNav/Granularized/FrontEndNav/EnvVariables/Frameworks';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/EnvVariables/BestPractices';

const EnvVariables: Subpage = {
  name: 'Environment Variables',
  subpages: [
    Essentials,
    Frameworks,
    BestPractices
  ]
};

export default EnvVariables;