import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals';
import AdvancedConcepts from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/BestPractices';

const Less: Subpage = {
    name: 'Less',
    subpages: [
        Fundamentals,
        AdvancedConcepts,
        BestPractices
    ],
};

export default Less;