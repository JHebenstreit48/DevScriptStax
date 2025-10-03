import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/EnvVariables/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/EnvVariables/Advanced';
import Tools from '@/Navigation/Individual/Granularized/Tools/EnvVariables/Tools';

const EnvVariables: Subpage = {
  name: 'Env Variables',
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default EnvVariables;