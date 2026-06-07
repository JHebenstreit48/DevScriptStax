import type { Subpage } from '@/types/navigation';

import Preprocessors from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Preprocessors';
import Postprocessors from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostProcessors';
import Frameworks from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Frameworks';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    Preprocessors,
    Postprocessors,
    Frameworks
  ]
};

export default Tools;