import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSSNav/Fundamentals';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSSNav/BestPractices';

const SCSS: Subpage = {
    name: 'SCSS',
    subpages: [
        Fundamentals,
        BestPractices
    ]
};

export default SCSS;