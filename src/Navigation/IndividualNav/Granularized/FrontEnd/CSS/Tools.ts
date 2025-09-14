import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// ------------------------- Preprocessors Navigation Start -------------------------
import Less from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less';
import Sass from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass';
import SCSS from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSS';
// ------------------------- Preprocessors Navigation End ---------------------------

import Postprocessors from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostProcessors';
import Frameworks from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/Frameworks';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Preprocessors",
      subpages: [
        Less,
        Sass,
        SCSS
      ]
    },
    Postprocessors,
    Frameworks
  ]
};

export default Tools;