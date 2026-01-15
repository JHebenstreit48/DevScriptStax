import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals';
import AdvancedConcepts from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/BestPractices';

const Sass: Subpage = {
    name: 'Sass',
    subpages: [
        Fundamentals,
        AdvancedConcepts,
        BestPractices
    ],
};

export default Sass;