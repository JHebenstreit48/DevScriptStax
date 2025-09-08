import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/SassNav/Fundamentals';
import AdvancedConcepts from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/SassNav/AdvancedConcepts';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/SassNav/BestPractices';

const Sass: Subpage = {
    name: 'Sass',
    subpages: [
        Fundamentals,
        AdvancedConcepts,
        BestPractices
    ],
};

export default Sass;