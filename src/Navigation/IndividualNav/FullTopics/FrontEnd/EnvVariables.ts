import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Essentials from '@/Navigation/IndividualNav/Granularized/FrontEnd/EnvVariables/Essentials';
import Frameworks from '@/Navigation/IndividualNav/Granularized/FrontEnd/EnvVariables/Frameworks';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/EnvVariables/BestPractices';

const EnvVariables: Subpage = {
  name: 'Env Variables',
  subpages: [
    Essentials,
    Frameworks,
    BestPractices
  ]
};

export default EnvVariables;