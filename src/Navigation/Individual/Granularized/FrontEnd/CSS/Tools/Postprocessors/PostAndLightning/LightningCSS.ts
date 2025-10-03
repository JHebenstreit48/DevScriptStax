import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced';

const LightningCSS: Subpage = {
    name: "Lightning CSS",
    subpages: [
        Basics,
        Advanced
    ]
};

export default LightningCSS;