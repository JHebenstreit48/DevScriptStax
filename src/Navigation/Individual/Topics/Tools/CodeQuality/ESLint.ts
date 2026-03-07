import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Tools/CodeQuality/ESLint/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/CodeQuality/ESLint/Advanced';

const ESLint: Subpage = {
    name: 'ESLint',
    subpages: [
        Basics,
        Advanced
    ]
};

export default ESLint;