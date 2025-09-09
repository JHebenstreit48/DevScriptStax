import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals';
import AdvancedConcepts from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Preprocessors/Sass/BestPractices';

const Sass: Subpage = {
    name: 'Sass',
    subpages: [
        Fundamentals,
        AdvancedConcepts,
        BestPractices
    ],
};

export default Sass;