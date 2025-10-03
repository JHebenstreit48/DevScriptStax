import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced';

const PostCSS: Subpage = {
    name: "PostCSS",
    subpages: [
        Basics,
        Advanced
    ]
};

export default PostCSS;