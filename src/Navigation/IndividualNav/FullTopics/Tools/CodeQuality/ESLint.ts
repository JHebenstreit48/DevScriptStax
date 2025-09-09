import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tools/CodeQuality/ESLint/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Tools/CodeQuality/ESLint/Advanced';

const ESLint: Subpage = {
    name: 'ESLint',
    subpages: [
        Basics,
        Advanced
    ]
};

export default ESLint;