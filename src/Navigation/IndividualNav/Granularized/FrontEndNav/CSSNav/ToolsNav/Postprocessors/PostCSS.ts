import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocesors/PostCSS/Fundamentals';
import Plugins from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocesors/PostCSS/Plugins';
import Guides from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocesors/PostCSS/Guides';
import AdvancedAndRoadmap from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Postprocesors/PostCSS/AdvancedAndRoadmap';


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