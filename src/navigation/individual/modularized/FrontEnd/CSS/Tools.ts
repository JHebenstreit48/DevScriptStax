import type { Subpage } from '@/types/navigation';

import Preprocessors from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Preprocessors/Preprocessors';
import Postprocessors from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/PostProcessors';
import Frameworks from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Frameworks';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    Preprocessors,
    Postprocessors,
    Frameworks
  ]
};

export default Tools;