import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// ------------------------- Preprocessors Navigation Start -------------------------
import Less from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less';
import Sass from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass';
import SCSS from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSS';
// ------------------------- Preprocessors Navigation End ---------------------------

// ------------------------- Postprocessors Navigation Start -------------------------
import OverviewAndConcepts from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/Overview';
import ToolingAndEcosystem from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/Tooling';
import PostCSS from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS';
// ------------------------- Postprocessors Navigation End ---------------------------

// ------------------------- Frameworks Navigation Start -------------------------
import Bootstrap from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap';
import ReactBootstrap from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap';
import TailwindCSS from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS';
// ------------------------- Frameworks Navigation End ---------------------------  

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
    {
      name: "Postprocessors",
      subpages: [
        OverviewAndConcepts,
        ToolingAndEcosystem,
        PostCSS
      ]
    },
    {
      name: "Frameworks",
      subpages: [
        Bootstrap,
        ReactBootstrap,
        TailwindCSS
      ]
    }
  ]
};

export default Tools;