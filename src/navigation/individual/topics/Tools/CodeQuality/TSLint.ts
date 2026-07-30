import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/CodeQuality/TSLint/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/CodeQuality/TSLint/Advanced';

const TSLint: Subpage = {
    name: 'TSLint',
    subpages: [
        Basics,
        Advanced
    ]
};

export default TSLint;