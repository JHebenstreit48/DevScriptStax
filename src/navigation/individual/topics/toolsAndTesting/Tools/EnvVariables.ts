import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/toolsAndTesting/Tools/EnvVariables/Basics';
import Advanced from '@/navigation/individual/modularized/toolsAndTesting/Tools/EnvVariables/Advanced';
import Tools from '@/navigation/individual/modularized/toolsAndTesting/Tools/EnvVariables/Tools';

const EnvVariables: Subpage = {
  name: 'Env Variables',
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default EnvVariables;