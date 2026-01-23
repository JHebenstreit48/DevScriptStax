import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSS/BestPractices';

const SCSS: Subpage = {
    name: 'SCSS',
    subpages: [
        Fundamentals,
        BestPractices
    ]
};

export default SCSS;