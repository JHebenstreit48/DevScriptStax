import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocessors/PostCSS/Fundamentals';
import Plugins from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocessors/PostCSS/Plugins';
import Guides from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocessors/PostCSS/Guides';
import AdvancedAndRoadmap from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocessors/PostCSS/AdvancedAndRoadmap';


const PostCSS: Subpage = {
    name: 'PostCSS',
    subpages: [
        Fundamentals,
        Plugins,
        Guides,
        AdvancedAndRoadmap
    ]
};

export default PostCSS;