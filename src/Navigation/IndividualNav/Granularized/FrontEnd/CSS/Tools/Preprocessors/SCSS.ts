import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/SCSSNav/Fundamentals';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Preprocessors/SCSSNav/BestPractices';

const SCSS: Subpage = {
    name: 'SCSS',
    subpages: [
        Fundamentals,
        BestPractices
    ]
};

export default SCSS;