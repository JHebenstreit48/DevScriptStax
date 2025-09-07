import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/LessNav/Fundamentals';
import AdvancedConcepts from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/LessNav/AdvancedConcepts';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/LessNav/BestPractices';

const Less: Subpage = {
    name: 'Less',
    subpages: [
        Fundamentals,
        AdvancedConcepts,
        BestPractices
    ],
};

export default Less;