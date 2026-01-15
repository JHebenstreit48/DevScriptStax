import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals';
import AdvancedConcepts from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Less/BestPractices';

const Less: Subpage = {
    name: 'Less',
    subpages: [
        Fundamentals,
        AdvancedConcepts,
        BestPractices
    ],
};

export default Less;