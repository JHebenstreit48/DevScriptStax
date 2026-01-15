import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/General/Basics';
import PostCSS from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostAndLightning/PostCSS';
import LightningCSS from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostAndLightning/LightningCSS';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/General/Advanced';

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