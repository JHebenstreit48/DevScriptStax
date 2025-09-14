import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/General/Basics';
import PostCSS from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostAndLightning/PostCSS';
import LightningCSS from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostAndLightning/LightningCSS';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/General/Advanced';

const Postprocessors: Subpage = {
    name: "Postprocessors",
    subpages: [
        Basics,
        PostCSS,
        LightningCSS,
        Advanced
    ]
};

export default Postprocessors;