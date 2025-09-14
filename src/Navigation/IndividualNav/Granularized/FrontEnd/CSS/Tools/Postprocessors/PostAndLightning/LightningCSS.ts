import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced';

const LightningCSS: Subpage = {
    name: "Lightning CSS",
    subpages: [
        Basics,
        Advanced
    ]
};

export default LightningCSS;