import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/CodeQuality/TSLint/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/CodeQuality/TSLint/Advanced';

const TSLint: Subpage = {
    name: 'TSLint',
    subpages: [
        Basics,
        Advanced
    ]
};

export default TSLint;