import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tools/EnvVariables/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Tools/EnvVariables/Advanced';
import Tools from '@/Navigation/IndividualNav/Granularized/Tools/EnvVariables/Tools';

const EnvVariables: Subpage = {
  name: 'Env Variables',
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default EnvVariables;