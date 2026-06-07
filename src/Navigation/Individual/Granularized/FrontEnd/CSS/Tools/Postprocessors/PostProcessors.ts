import type { Subpage } from '@/types/navigation';

import Foundations from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Combined/Foundations';
import LightningCSS from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Combined/LightningCSS';
import PostCSS from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/Combined/PostCSS';

const Postprocessors: Subpage = {
    name: "Postprocessors",
    subpages: [
        Foundations,
        PostCSS,
        LightningCSS,
    ]
};

export default Postprocessors;