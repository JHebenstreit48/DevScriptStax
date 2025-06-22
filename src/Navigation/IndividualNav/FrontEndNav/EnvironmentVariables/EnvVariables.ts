import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Essentials from '@/Navigation/IndividualNav/FrontEndNav/EnvironmentVariables/EnvNav/Essentials';
import Frameworks from '@/Navigation/IndividualNav/FrontEndNav/EnvironmentVariables/EnvNav/Frameworks';
import BestPractices from '@/Navigation/IndividualNav/FrontEndNav/EnvironmentVariables/EnvNav/BestPractices';

const EnvVariables: Subpage = {
  name: 'Environment Variables',
  subpages: [
    Essentials,
    Frameworks,
    BestPractices
  ]
};

export default EnvVariables;