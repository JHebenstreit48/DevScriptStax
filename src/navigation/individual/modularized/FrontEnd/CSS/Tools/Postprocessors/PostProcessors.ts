import type { Subpage } from '@/types/navigation';

import Foundations from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/Combined/Foundations';
import LightningCSS from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/Combined/LightningCSS';
import PostCSS from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/Combined/PostCSS';

const Postprocessors: Subpage = {
    name: "Postprocessors",
    subpages: [
        Foundations,
        PostCSS,
        LightningCSS,
    ]
};

export default Postprocessors;