import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Tools/CodeQuality/TSLint/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Tools/CodeQuality/TSLint/Advanced';

const TSLint: Subpage = {
    name: 'TSLint',
    subpages: [
        Basics,
        Advanced
    ]
};

export default TSLint;