import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced';

const PostCSS: Subpage = {
    name: "PostCSS",
    subpages: [
        Basics,
        Advanced
    ]
};

export default PostCSS;