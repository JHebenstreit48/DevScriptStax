import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSSNav/Fundamentals';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Preprocessors/SCSSNav/BestPractices';

const SCSS: Subpage = {
    name: 'SCSS',
    subpages: [
        Fundamentals,
        BestPractices
    ]
};

export default SCSS;